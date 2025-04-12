
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RecipeResponse } from '@/services/recipeService';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChefHat, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RecipeDisplayProps {
  recipe: RecipeResponse;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  const { recipeName, description, requiredIngredients, instructions, notes } = recipe;

  return (
    <Card className="w-full shadow-md bg-white animate-fade-in">
      <CardContent className="pt-6 pb-6">
        <div className="recipe-section">
          <div className="flex items-center gap-2">
            <ChefHat className="h-7 w-7 text-recipe-secondary" />
            <h2 className="recipe-title">{recipeName}</h2>
          </div>
          <p className="recipe-description">{description}</p>
        </div>

        <div className="recipe-section">
          <h3 className="ingredients-title">Ingredients</h3>
          <ul className="recipe-list">
            {requiredIngredients.map((ingredient, index) => (
              <li key={index} className="recipe-list-item">
                <span className="recipe-list-marker">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h3 className="instructions-title">Instructions</h3>
          <ScrollArea className="h-[260px] pr-4">
            <ol className="list-decimal pl-5 space-y-3">
              {instructions.map((step, index) => (
                <li key={index} className="pl-1">
                  {step}
                </li>
              ))}
            </ol>
          </ScrollArea>
        </div>

        {notes && (
          <div className="recipe-section">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-recipe-secondary" />
              <h3 className="font-medium">Notes</h3>
            </div>
            <div className="recipe-notes">{notes}</div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <Badge className="bg-recipe-primary/10 text-recipe-primary hover:bg-recipe-primary/20">
            {recipe.preference || "Custom"} Recipe
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeDisplay;
