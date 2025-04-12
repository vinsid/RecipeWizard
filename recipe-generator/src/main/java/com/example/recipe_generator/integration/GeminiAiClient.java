package com.example.recipe_generator.integration;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@Component
public class GeminiAiClient implements AiServiceClient {

    @SuppressWarnings("deprecation")
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Value("${google.gemini.api.key}")
    private String apiKey;

    @Value("${google.gemini.api.url}")
    private String apiUrl;

    @Value("${google.gemini.temperature:0.7}")
    private double temperature;

    @Value("${google.gemini.maxOutputTokens:1024}")
    private int maxOutputTokens;

    @Value("${google.gemini.topK:40}")
    private int topK;

    @Value("${google.gemini.topP:0.95}")
    private double topP;

    public GeminiAiClient(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    @Override
    public String getRecipeFromAi(String prompt) throws Exception {
        URI uri = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("key", apiKey)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> textPart = Map.of("text", prompt);
        Map<String, Object> content = Map.of("parts", List.of(textPart));
        Map<String, Object> generationConfig = Map.of(
                "temperature", temperature,
                "maxOutputTokens", maxOutputTokens,
                "topK", topK,
                "topP", topP
        );
        Map<String, Object> requestBodyMap = Map.of(
                "contents", List.of(content),
                "generationConfig", generationConfig
        );

        String requestBodyJson;
        try {
            requestBodyJson = objectMapper.writeValueAsString(requestBodyMap);
        } catch (JsonProcessingException e) {
            throw new Exception("Failed to create JSON request for Gemini API.", e);
        }

        HttpEntity<String> entity = new HttpEntity<>(requestBodyJson, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(uri, entity, Map.class);
            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.getBody().get("candidates");
                if (candidates != null && !candidates.isEmpty()) {
                    Map<String, Object> candidate = candidates.get(0);
                    Map<String, Object> responseContent = (Map<String, Object>) candidate.get("content");
                    if (responseContent != null) {
                        List<Map<String, Object>> parts = (List<Map<String, Object>>) responseContent.get("parts");
                        if (parts != null && !parts.isEmpty()) {
                            String generatedText = (String) parts.get(0).get("text");
                            if (generatedText != null) {
                                return generatedText.trim();
                            }
                        }
                    }
                    if (candidate.containsKey("finishReason") &&
                            !"STOP".equals(candidate.get("finishReason"))) {
                        throw new Exception("Gemini response blocked or incomplete. Reason: " + candidate.get("finishReason"));
                    }
                }
                throw new Exception("Failed to parse Gemini response: No valid candidate or text part found.");
            } else {
                throw new Exception("Gemini API request failed with status: " + response.getStatusCode());
            }
        } catch (HttpClientErrorException e) {
            throw new Exception("Failed to communicate with Gemini service (Client Error).", e);
        } catch (Exception e) {
            throw new Exception("Failed to communicate with Gemini service.", e);
        }
    }
}