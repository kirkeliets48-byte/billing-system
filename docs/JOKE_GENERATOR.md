# Joke Generator API

A fun random joke generator using the free JokeAPI service. Perfect for lightening up your billing system! 😄

## Endpoints

### Get Random Joke
- **GET** `/api/jokes/random`
- **Query Parameters**:
  - `category` (optional): Joke category (Any, Miscellaneous, Knox, Programming, Knock-Knock) - default: Any
- **Response**:
  ```json
  {
    "message": "Random joke fetched successfully",
    "data": {
      "joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
      "category": "Programming",
      "type": "single",
      "safe": true
    }
  }
  ```

### Get Two-Part Joke
- **GET** `/api/jokes/two-part`
- **Query Parameters**:
  - `category` (optional): Joke category - default: Any
- **Response**:
  ```json
  {
    "message": "Two-part joke fetched successfully",
    "data": {
      "setup": "Knock knock!",
      "delivery": "Who's there?",
      "category": "Knock-Knock",
      "type": "twopart",
      "safe": true
    }
  }
  ```

### Get Programming Joke
- **GET** `/api/jokes/programming`
- **Response**: Random programming joke

### Get Knock-Knock Joke
- **GET** `/api/jokes/knock-knock`
- **Response**: Random knock-knock joke

### Get Available Categories
- **GET** `/api/jokes/categories`
- **Response**:
  ```json
  {
    "message": "Available joke categories",
    "data": {
      "categories": ["Any", "Miscellaneous", "Knox", "Programming", "Knock-Knock"],
      "count": 5
    }
  }
  ```

### Get Multiple Jokes
- **POST** `/api/jokes/batch`
- **Body**:
  ```json
  {
    "count": 3,
    "category": "Programming"
  }
  ```
- **Parameters**:
  - `count` (optional): Number of jokes (1-10, default: 5)
  - `category` (optional): Joke category - default: Any
- **Response**:
  ```json
  {
    "message": "3 jokes fetched successfully",
    "data": {
      "jokes": [...],
      "count": 3
    }
  }
  ```

## Usage Examples

### Using cURL

```bash
# Get a random joke
curl http://localhost:3000/api/jokes/random

# Get a programming joke
curl http://localhost:3000/api/jokes/programming

# Get multiple jokes
curl -X POST http://localhost:3000/api/jokes/batch \
  -H "Content-Type: application/json" \
  -d '{"count": 5, "category": "Programming"}'

# Get jokes from specific category
curl "http://localhost:3000/api/jokes/random?category=Knock-Knock"
```

### Using JavaScript/Node.js

```javascript
// Get a random joke
const response = await fetch('http://localhost:3000/api/jokes/random');
const data = await response.json();
console.log(data.data.joke);

// Get multiple jokes
const batchResponse = await fetch('http://localhost:3000/api/jokes/batch', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ count: 5, category: 'Programming' })
});
const batchData = await batchResponse.json();
console.log(batchData.data.jokes);
```

## Available Categories

- **Any**: Mix of all categories
- **Miscellaneous**: Various jokes
- **Knox**: Knox jokes
- **Programming**: Programming and tech jokes
- **Knock-Knock**: Classic knock-knock jokes

## Error Handling

All errors return appropriate HTTP status codes and error messages:

```json
{
  "error": "Invalid category. Available: Any, Miscellaneous, Knox, Programming, Knock-Knock"
}
```

## API Source

This joke generator uses the free [JokeAPI](https://jokeapi.dev) service.

## Rate Limiting

No official rate limit from JokeAPI, but please use responsibly. Each request has a 5-second timeout.
