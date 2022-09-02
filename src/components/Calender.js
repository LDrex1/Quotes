import React from "react";
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
  return {
    minutes: minutes,
    hours: hours,
    month: month,
    day: weekDay,
    year: year,
    date: calDate,
  };
}

export default Calender;
