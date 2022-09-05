export const calenderMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const calenderDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Calender() {
  const date = new Date();
  const calDate = date.getDate();
  const monthIndex = date.getMonth();
  const dayIndex = date.getDay();
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const month = calenderMonths[monthIndex];
  const weekDay = calenderDays[dayIndex];
  const minutesPad = ("00" + minutes).slice(-2);
  const hoursPad = ("00" + hours).slice(-2);

  return {
    minutes: minutes,
    minutesPad: minutesPad,
    hours: hours,
    hoursPad: hoursPad,
    month: month,
    day: weekDay,
    year: year,
    date: calDate,
  };
}

export default Calender;
