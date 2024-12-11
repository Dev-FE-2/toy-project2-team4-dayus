export function removeDuplicates<T>(
  existingItems: T[],
  newItems: T[],
  key: keyof T,
): T[] {
  return newItems.filter(
    newItem =>
      !existingItems.some(existingItem => existingItem[key] === newItem[key]),
  );
}
