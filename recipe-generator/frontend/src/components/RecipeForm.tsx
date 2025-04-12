
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RecipeRequest } from '@/services/recipeService';
import { UtensilsCrossed, RefreshCcw } from 'lucide-react';

interface RecipeFormProps {
  onSubmit: (data: RecipeRequest) => void;
  isLoading: boolean;
  onReset: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit, isLoading, onReset }) => {
  const [ingredients, setIngredients] = useState<string>('');
  const [preference, setPreference] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Split ingredients by commas and trim whitespace
    const ingredientsList = ingredients
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    
    onSubmit({
      ingredients: ingredientsList,
      preference,
    });
  };
  
  const cuisines = [
    "Italian", "Asian", "Mexican", "Mediterranean", 
    "American", "Indian", "French", "Middle Eastern"
  ];
  
  const handleReset = () => {
    setIngredients('');
    setPreference('');
    onReset();
  };

  return (
    <Card className="w-full shadow-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="ingredients" className="text-sm font-medium">
              Ingredients
            </label>
            <Input
              id="ingredients"
              placeholder="Enter ingredients separated by commas (e.g., chicken, rice, soy sauce)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
              className="border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="preference" className="text-sm font-medium">
              Culinary Preference
            </label>
            <Select
              value={preference}
              onValueChange={(value) => setPreference(value)}
              required
            >
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select cuisine style" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine) => (
                  <SelectItem key={cuisine} value={cuisine}>
                    {cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              type="submit" 
              className="flex-1 bg-recipe-primary hover:bg-recipe-primary/90"
              disabled={isLoading || !ingredients || !preference}
            >
              <UtensilsCrossed className="mr-2 h-4 w-4" />
              Generate Recipe
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary/10"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecipeForm;
