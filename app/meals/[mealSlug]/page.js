export default function MealPage({ params }) {
  const { mealSlug } = params;
  return (
    <main>
      <p>{mealSlug}</p>
    </main>
  );
}
