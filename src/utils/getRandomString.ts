/**
 * 무작위 문자열 생성기
 * @param {number} num 문자열 길이
 * @returns {string} 무작위 문자열
 */
const getRandomString = (num: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export default getRandomString;
