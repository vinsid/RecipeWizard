
export interface RecipeRequest {
  ingredients: string[];
  preference: string;
}

export interface RecipeResponse {
  recipeName: string;
  description: string;
  requiredIngredients: string[];
  instructions: string[];
  notes?: string;
  preference?: string;
}

export const generateRecipe = async (request: RecipeRequest): Promise<RecipeResponse> => {
  try {
    const response = await fetch("http://localhost:8081/api/v1/recipes/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to generate recipe");
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};
