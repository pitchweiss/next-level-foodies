"use client";

export default function MealError({ error }) {
  return (
    <main className="error">
      <h1>Oops! Something went wrong while fetching meals.</h1>
      <p>Try refreshing your browser.</p>
    </main>
  );
}
