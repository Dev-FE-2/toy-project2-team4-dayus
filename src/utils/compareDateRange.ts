const compareDateRange = (start: Date, end: Date) => {
  const isSameDay = start.getDate() === end.getDate();
  return isSameDay ? { start, end: start } : { start, end };
};

export { compareDateRange };
