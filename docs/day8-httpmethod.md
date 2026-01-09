#  Day 8 – HTTP & API Fundamentals

## Objective
Explore and document two public APIs, test HTTP methods using browser/Postman, and understand their endpoints and usage.

---

##  APIs Explored
 **JSONPlaceholder** – Fake REST API for testing  
 **OpenWeatherMap** – Real weather data API

---

## 1 .JSONPlaceholder – API Documentation

**Base URL**: `https://jsonplaceholder.typicode.com`

A mock API used to practice CRUD operations and HTTP methods.

| Endpoint | Method | Purpose | Example |
|---------|--------|---------|---------|
| `/posts` | GET | Retrieve all blog posts | `https://jsonplaceholder.typicode.com/posts` |
| `/posts/1` | GET | Retrieve a single post | `https://jsonplaceholder.typicode.com/posts/1` |
| `/users` | GET | Retrieve all users | `https://jsonplaceholder.typicode.com/users` |
| `/posts` | POST | Create a new post (fake) | Use Postman: title/body/userId body |
| `/posts/1` | PUT | Replace entire post | Full document update |
| `/posts/1` | PATCH | Partially update a post | Update just title/body |
| `/posts/1` | DELETE | Delete a post (fake) | No body returned |

###  Status Codes Seen:
- `200 OK` → GET success  
- `201 Created` → POST success  
- `204 No Content` → DELETE behavior  
- Fake API → Data does not persist

---

## 2. OpenWeatherMap – API Documentation

**Base URL**: `https://api.openweathermap.org/data/2.5`  
**Auth Required**: ✔ API Key (`appid`)

Provides real-time weather details for cities worldwide.

| Endpoint | Method | Purpose | Example |
|---------|--------|---------|---------|
| `/weather` | GET | Get current weather by city name | `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=YOUR_KEY&units=metric` |

### Common Query Parameters:
| Parameter | Description | Example |
|----------|-------------|---------|
| `q` | City name | `q=London` |
| `appid` | API Key | `appid=xxxxxxxx` |
| `units` | Units format (metric/imperial) | `units=metric` |

### Status Codes Seen:
- `200 OK` → Valid key + valid city  
- `404 Not Found` → Invalid city name  
- `401 Unauthorized` → Wrong/missing API key  

---

## Comparison Chart

| Feature | JSONPlaceholder | OpenWeatherMap |
|--------|----------------|----------------|
| Type | Fake REST API for learning | Live real-world API |
| Auth Needed |  No | Yes (API Key) |
| Methods Used | GET, POST, PUT, PATCH, DELETE | GET |
| Data Persistence |  No | Yes |
| Use Cases | Frontend testing, learning HTTP | Weather apps, real applications |
| Response Format | JSON | JSON |

---

## Key Learnings

- Practiced **HTTP request methods** using browser + Postman  
- Understood **REST endpoints** and how data is fetched or modified  
- Experienced different **status codes** and their meanings  
- Understood the difference between a **mock testing API** and a **real dynamic API**  
- Learned to send **query parameters & authentication keys**

---



