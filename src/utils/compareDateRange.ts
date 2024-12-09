const compareDateRange = (start: Date, end: Date) => {
  const actualEnd = new Date(end);
  actualEnd.setDate(actualEnd.getDate() - 1);

  const isSameDay = start.getDate() === actualEnd.getDate();

  return isSameDay ? { start, end: start } : { start, end: actualEnd };
};

export { compareDateRange };
