type formatType = 'dot' | 'hyphen';

export const formatDate = (date: Date, type?: formatType) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  if (type === 'dot') return `${year}.${month}.${day}`;
  if (type === 'hyphen') return `${year}-${month}-${day}`;
  return `${year}년 ${month}월 ${day}일`;
};
