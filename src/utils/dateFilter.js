import { addMinutes } from 'date-fns';

export const travelTime = duration => {
  const hour = Math.trunc(duration / 60);
  const min = duration % 60;
  return formattedTime(hour, min, true);
};

export const getDepartureTime = departureDate => {
  const date = new Date(departureDate);
  const hour = date.getHours();
  const min = date.getMinutes();
  return formattedTime(hour, min);
};

export const getArrivalTime = (departureDate, duration) => {
  const date = addMinutes(new Date(departureDate), duration);
  const hour = date.getHours();
  const min = date.getMinutes();
  return formattedTime(hour, min);
};

const formattedTime = (hour, min, letters = false) => {
  if (letters) {
    return `${hour < 10 ? `0${hour}` : hour}ч ${min < 10 ? `0${min}` : min}м`;
  }

  return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`;
};
