// AiServiceClient.java
package com.example.recipe_generator.integration;

public interface AiServiceClient {
    String getRecipeFromAi(String prompt) throws Exception;
}