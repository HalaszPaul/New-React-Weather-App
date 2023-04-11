import { DAYS, MONTHS } from "../constants/date-time";

export const dateToString = (date) => {
  const day = DAYS[date.getDay()];
  const dayOfWeek = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${dayOfWeek} ${month} ${year}`;
};
