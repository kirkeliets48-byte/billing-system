const JokeGenerator = require('../src/utils/jokeGenerator');

describe('JokeGenerator', () => {
  let jokeGenerator;

  beforeEach(() => {
    jokeGenerator = new JokeGenerator();
  });

  test('should get a random joke', async () => {
    const result = await jokeGenerator.getRandomJoke();
    expect(result.success).toBe(true);
    expect(result.data).toHaveProperty('joke');
    expect(result.data).toHaveProperty('category');
    expect(result.data).toHaveProperty('type');
  });

  test('should get a joke from specific category', async () => {
    const result = await jokeGenerator.getRandomJoke('Programming');
    expect(result.success).toBe(true);
    expect(result.data.category).toBe('Programming');
  });

  test('should get a two-part joke', async () => {
    const result = await jokeGenerator.getTwoPartJoke('Knock-Knock');
    expect(result.success).toBe(true);
    expect(result.data).toHaveProperty('setup');
    expect(result.data).toHaveProperty('delivery');
  });

  test('should return available categories', () => {
    const categories = jokeGenerator.getAvailableCategories();
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    expect(categories).toContain('Programming');
  });

  test('should handle invalid category gracefully', async () => {
    const result = await jokeGenerator.getRandomJoke('InvalidCategory');
    expect(result.success).toBe(false);
    expect(result).toHaveProperty('error');
  });
});
