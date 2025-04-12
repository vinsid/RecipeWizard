package com.example.recipe_generator.dto;

import java.util.List;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecipeResponse {
    private String recipeName;
    private String description;
    private List<String> requiredIngredients;
    private List<String> instructions;
    private String notes;
}