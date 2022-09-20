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

export function calculateTimePassed(timeStamp) {
  const date = new Date();
  const timeStampMillSec = timeStamp.seconds * 1000;
  const dateCreated = new Date(timeStampMillSec);
  const timeDifference = (date.getTime() - dateCreated.getTime()) / 60000;
  // console.log(timeDifference);
  if (timeDifference > 0 && timeDifference < 60) {
    return `Posted ${~~timeDifference} ${
      timeDifference < 2 ? "min" : "mins"
    } ago`;
  }
  if (timeDifference > 60 && timeDifference < 1440) {
    return `Posted ${~~(timeDifference / 60)} ${
      timeDifference / 60 < 2 ? "hour" : "hours"
    } ago`;
  }
  if (timeDifference > 1440 && timeDifference < 10080) {
    return `Posted ${~~(timeDifference / (60 * 24))} ${
      timeDifference / (60 * 24) < 2 ? "day" : "days"
    } ago`;
  }
  if (timeDifference > 10080 && timeDifference < 40320) {
    return `Posted ${~~(timeDifference / (60 * 24 * 7))} ${
      timeDifference / (60 * 24 * 7) < 2 ? "week" : "weeks"
    } ago`;
  }
  if (timeDifference > 40320 && timeDifference < 483840) {
    return `Posted ${~~(timeDifference / 483840)} ${
      timeDifference / 483840 < 2 ? "year" : "years"
    } ago`;
  } else {
    return `Posted just now`;
  }

  // console.log(timeDifference / 60000);
}

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
