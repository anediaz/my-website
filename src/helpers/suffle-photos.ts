export function sufflePhotos<T>(array: T[]): T[] {
  const clonedArray = [...array];
  for (let i = clonedArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = clonedArray[i];
    clonedArray[i] = clonedArray[j];
    clonedArray[j] = temp;
  }
  return clonedArray;
}
