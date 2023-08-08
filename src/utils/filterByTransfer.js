export const filterByTransfer = (ticket, transferFilters, filterAll) => {
  if (!filterAll) {
    const stops = ticket.segments.map(el => el.stops.length);

    const filter = Object.entries(transferFilters).filter(([key, value]) => {
      return stops.includes(+key) && value;
    });

    return filter.length > 0 ? true : false;
  }
  return true;
};
