package com.example.recipe_generator.controller;

import com.example.recipe_generator.dto.RecipeRequest;
import com.example.recipe_generator.dto.RecipeResponse;
import com.example.recipe_generator.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping("/generate")
    public ResponseEntity<RecipeResponse> generateRecipe(@RequestBody RecipeRequest request) {
        if (request.getIngredients() == null || request.getIngredients().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        try {
            RecipeResponse response = recipeService.generateRecipe(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.err.println("Error generating recipe: " + e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }
}