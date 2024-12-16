/**
 * @param min - 최소값
 * @param max - 최대값
 */
const makeRandomRange = (min: number, max: number): number => {
  if (min > max) {
    throw new Error('makeRandomRange error: min, max 값을 확인해 주세요.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default makeRandomRange;
