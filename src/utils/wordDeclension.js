export function wordDeclension(number, wordsArr) {
  const num = number % 10;
  if (number > 10 && number < 20) return wordsArr[2];
  if (num > 1 && num < 5) return wordsArr[1];
  if (num === 1) return wordsArr[0];
  return wordsArr[2];
}
