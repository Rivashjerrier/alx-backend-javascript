export default function updateUniqueItems(groceryItems) {
  if (!(groceryItems instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const item of groceryItems.keys()) {
    if (groceryItems.get(item) === 1) {
      groceryItems.set(item, 100);
    }
  }
}
