// RecipeService.java
package com.example.recipe_generator.service;

import com.example.recipe_generator.dto.RecipeRequest;
import com.example.recipe_generator.dto.RecipeResponse;

public interface RecipeService {
    RecipeResponse generateRecipe(RecipeRequest request) throws Exception;
}