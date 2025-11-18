// ---------------------------------------
// ES6+ Template Literals Example
// String formatting and expressions
// ---------------------------------------

// Sample user data
const user = {
  name: "San",
  role: "Frontend Developer",
  experience: 1
};

// Using a template literal for formatted output
const userInfo = `
Name: ${user.name}
Role: ${user.role}
Experience: ${user.experience} year(s)
`;

console.log(userInfo);

// Template literal inside a function
function greetUser(name) {
  return `Hello, ${name}! Welcome to JS practice.`;
}

console.log(greetUser("San"));
