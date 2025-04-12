<div align="center">
  
# 🧙‍♂️ RecipeWizard 🍳

### Transform ingredients into culinary magic!

</div>

## 🌟 Overview

**RecipeWizard** is an intelligent recipe generation application that transforms your available ingredients into delightful dishes tailored to your culinary preferences. Using the power of Google's Gemini AI, it creates personalized recipes that make the most of what you have on hand.

<div align="center">
  <img src="/api/placeholder/800/400" alt="RecipeWizard Interface" />
</div>

## ✨ Features

- **Ingredient-Based Generation**: Create recipes using only the ingredients you have available
- **Customizable Cuisine Styles**: Select from various culinary traditions (Italian, Asian, American, etc.)
- **Responsive UI**: Enjoy a seamless experience on any device
- **AI-Powered Suggestions**: Leverage Google Gemini's AI to generate creative recipe ideas
- **Easy to Use**: Simple, intuitive interface for cooks of all skill levels

## 🛠️ Tech Stack

### Backend
- **Java 21** - Latest language features
- **Spring Boot** - Robust application framework
- **Maven** - Dependency management
- **Google Gemini API** - AI-powered recipe generation

### Frontend
- **React** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework

## 📋 System Architecture

```
┌─────────────────┐       ┌──────────────────┐       ┌────────────────┐
│                 │       │                  │       │                │
│  React Frontend │◄─────►│  Spring Backend  │◄─────►│  Google Gemini │
│  (Vite + TS)    │  API  │  (Java 21)       │  API  │  AI            │
│                 │       │                  │       │                │
└─────────────────┘       └──────────────────┘       └────────────────┘
```

## 🚀 Installation Guide

### Prerequisites
- Java Development Kit (JDK) 21
- Node.js (v14+) and npm
- Maven 3.6+
- Git

### Clone Repository
```bash
git clone https://github.com/vinsid/RecipeWizard.git
cd RecipeWizard
```

### Backend Setup
```bash
# Navigate to backend directory
cd recipe-generator

# Build the project
mvn clean install

# Run the application (set your Gemini API key as an environment variable)
export GEMINI_API_KEY=your_api_key_here  # Linux/macOS
set GEMINI_API_KEY=your_api_key_here     # Windows CMD
$env:GEMINI_API_KEY="your_api_key_here"  # Windows PowerShell

# Start the server
mvn spring-boot:run
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Access the application at: http://localhost:5174

## 💻 Usage Guide

1. **Enter Ingredients**: Type in the ingredients you have, separated by commas
2. **Select Cuisine Style**: Choose your preferred culinary tradition
3. **Generate Recipe**: Click the button and watch as RecipeWizard creates a custom recipe
4. **Save or Share**: Keep your favorite recipes for later or share them with friends

<div align="center">
  <img src="/api/placeholder/800/300" alt="RecipeWizard Demo" />
</div>

## 📡 API Reference

### Generate Recipe
- **Endpoint**: `POST /api/v1/recipes/generate`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "ingredients": ["chicken", "rice", "soy sauce"],
    "preference": "Asian"
  }
  ```
- **Response**:
  ```json
  {
    "recipeName": "Chicken Fried Rice",
    "description": "A simple Asian-style fried rice dish.",
    "requiredIngredients": ["chicken", "rice", "soy sauce", "oil"],
    "instructions": ["Cook rice...", "Stir-fry chicken...", "Mix with soy sauce..."],
    "notes": "Adjust soy sauce to taste."
  }
  ```

## 🔒 Security Considerations

- **API Key Protection**: Never commit your Google Gemini API key to version control
- **Environment Variables**: Store sensitive information in environment variables:
  ```properties
  google.gemini.api.key=${GEMINI_API_KEY}
  ```
- **Gitignore**: Ensure `src/main/resources/application.properties` is added to `.gitignore` if it contains sensitive information

## 🛣️ Roadmap

- [ ] User accounts and recipe saving
- [ ] Dietary restriction filters (vegan, gluten-free, etc.)
- [ ] Recipe rating system
- [ ] Ingredient substitution suggestions
- [ ] Mobile application

## 🤝 Contributing

We welcome contributions to make RecipeWizard even better! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 👏 Acknowledgements

- Google Gemini API for powering our recipe generation
- The open-source community for invaluable tools and libraries
- Home cooks everywhere for inspiration

---

<div align="center">
  
Made with ❤️ by Siddhu

</div>
