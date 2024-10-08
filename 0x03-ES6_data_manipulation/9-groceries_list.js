/**
 * Retrieves a map of grocery names and their quantity.
 */
export default function groceriesList() {
  const groceryItems = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(groceryItems);
}
