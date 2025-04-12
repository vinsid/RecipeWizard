package com.example.recipe_generator.dto;

import java.util.List;
import lombok.Data; // Ensure lowercase 'lombok'

@Data
public class RecipeRequest {
    private List<String> ingredients;
    private String preference;
}