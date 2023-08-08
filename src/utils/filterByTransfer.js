export const filterByTransfer = (ticket, transferFilters /*объект */, filterAll /*bool */) => {
  if (!filterAll) {
    const stops = ticket.segments.map(el => el.stops.length).reduce((previous, current) => previous + current, 0); // 3

    const filter = Object.entries(transferFilters).filter(([key, value]) => {
      return stops === +key && value;
    });

    return filter.length > 0 ? true : false;
  }
  return true;
};
