
---

# **Clean Code Principles**

## **1. Meaningful Names**

* Code should **explain itself**.
* Use **descriptive variable, function, and class names** that clearly convey intent.

###  **Example**

```js
// Bad
let x = 10;

// Good
let maxLoginAttempts = 10;
```

---

## **2. Single Responsibility Principle (SRP)**

* Each **function or class should do only one thing**, and do it well.
* Avoid mixing multiple responsibilities inside the same block of code.

###  **Example**

```js
// Bad — does too many things
function handleUser(user) {
  saveUserToDB(user);
  sendWelcomeEmail(user.email);
}

// Good — each function has one responsibility
function saveUser(user) { /* save to DB */ }
function sendWelcome(user) { /* send email */ }
```

---

## **3. Comment *Why*, Not *What***

* The **code should show what** it does.
* Comments should explain **why** something is done, not repeat the code.

### **Example**

```js
// Bad
// increment i by 1
i++;

// Good — explains the reason
// Retry the request after increasing attempt count
retryCount++;
```

---

## **4. KISS (Keep It Simple, Stupid)**

* **Simplicity > cleverness.**
* Write clear, simple code instead of overly complicated solutions.

###  **Example**

```js
//  Overcomplicated
function isEven(n) {
  return n % 2 === 0 ? true : false;
}

// Simple
function isEven(n) {
  return n % 2 === 0;
}
```

---
