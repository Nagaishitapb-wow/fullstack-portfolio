// ------------------------------
// ES6+ Destructuring Examples
// Object + Array destructuring
// ------------------------------

// Object destructuring
const product = {
  title: "Laptop",
  price: 50000,
  brand: "Dell",
};

// Extracting values using destructuring
const { title, price } = product;
console.log("Product:", title, price);

// Renaming during destructuring
const { brand: productBrand } = product;
console.log("Brand:", productBrand);

// Array destructuring
const colors = ["red", "green", "blue"];

// Extracting values
const [firstColor, secondColor] = colors;
console.log("First two colors:", firstColor, secondColor);

// Skipping values
const [, , thirdColor] = colors;
console.log("Third color:", thirdColor);
