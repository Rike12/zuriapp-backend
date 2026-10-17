const request = require("supertest");
const app = require("../server");

describe("Zuri Market API", () => {
  test("GET /api/store returns store information", async () => {
    const response = await request(app).get("/api/store");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("totalProducts");
  });

  test("GET /api/products returns products", async () => {
    const response = await request(app).get("/api/products");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
