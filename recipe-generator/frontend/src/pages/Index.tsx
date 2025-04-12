
import React from 'react';
import RecipeWizard from '@/components/RecipeWizard';
import { UtensilsCrossed } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-recipe-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center items-center mb-3">
            <div className="bg-recipe-secondary text-white p-3 rounded-full">
              <UtensilsCrossed className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-recipe-title font-bold text-recipe-primary mb-3">
            Recipe Wizard
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your ingredients into delicious recipes with the help of AI.
            Simply enter what you have and select your preferred cuisine style.
          </p>
        </header>
        
        <main>
          <RecipeWizard />
        </main>
        
        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>Powered by Google Gemini API • Recipe Wizard © 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
