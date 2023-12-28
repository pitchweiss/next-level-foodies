import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Something went wrong!"); // Uncomment to test error state
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
