
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import RecipeForm from './RecipeForm';
import RecipeDisplay from './RecipeDisplay';
import LoadingRecipe from './LoadingRecipe';
import { useToast } from '@/components/ui/use-toast';
import { generateRecipe, RecipeRequest, RecipeResponse } from '@/services/recipeService';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const RecipeWizard: React.FC = () => {
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (data: RecipeRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const generatedRecipe = await generateRecipe(data);
      setRecipe({
        ...generatedRecipe,
        preference: data.preference // Add preference to recipe for display
      });
      toast({
        title: "Recipe generated!",
        description: `Your ${data.preference} recipe is ready.`,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate recipe";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setRecipe(null);
    setError(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-6">
        <RecipeForm onSubmit={handleSubmit} isLoading={isLoading} onReset={handleReset} />
        
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {isLoading && <LoadingRecipe />}
        
        {recipe && !isLoading && <RecipeDisplay recipe={recipe} />}
      </div>
    </div>
  );
};

export default RecipeWizard;
