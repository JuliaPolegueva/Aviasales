export const getDurationTime = ticket => {
  return ticket.segments.map(item => item.duration).reduce((prev, current) => prev + current, 0);
};
