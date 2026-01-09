const baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input"); // this is your recipe search input
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");
const resultsGrid = document.getElementById("results");

// Fetch recipe
async function fetchRecipe(query) {
  loadingText.classList.remove("hidden");
  errorText.classList.add("hidden");
  resultsGrid.innerHTML = "";

  try {
    const response = await fetch(baseUrl + query);

    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    const data = await response.json();

    if (!data.meals) {
      errorText.textContent = "No recipes found!";
      errorText.classList.remove("hidden");
      return;
    }

    displayRecipes(data.meals);

  } catch (error) {
    console.error(error);
    errorText.textContent = "Something went wrong!";
    errorText.classList.remove("hidden");

  } finally {
    loadingText.classList.add("hidden");
  }
}

// Display recipe cards
function displayRecipes(meals) {
  resultsGrid.innerHTML = "";

  meals.forEach((meal) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${meal.strMealThumb}" class="recipe-image" alt="${meal.strMeal}">
      <div class="recipe-body">
        <h3 class="recipe-title">${meal.strMeal}</h3>
        <p class="recipe-info"><strong>Category:</strong> ${meal.strCategory}</p>
        <p class="recipe-info"><strong>Area:</strong> ${meal.strArea}</p>
        <a href="${meal.strSource || meal.strYoutube}" target="_blank" class="recipe-link">
          View Full Recipe
        </a>
      </div>
    `;

    resultsGrid.appendChild(card);
  });
}

// Event Listener
searchBtn.addEventListener("click", () => {
  const query = cityInput.value.trim();

  if (!query) {
    errorText.textContent = "Please enter a recipe name";
    errorText.classList.remove("hidden");
    return;
  }

  fetchRecipe(query);
});
