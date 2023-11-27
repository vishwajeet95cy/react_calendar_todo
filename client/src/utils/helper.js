export const getWeekStartDate = (currentWeek) => {
  const startDate = new Date(currentWeek);
  startDate.setDate(currentWeek.getDate() - currentWeek.getDay());
  return startDate;
};

export const getWeekEndDate = (currentWeek) => {
  const endDate = new Date(currentWeek);
  endDate.setDate(currentWeek.getDate() + (6 - currentWeek.getDay()));
  return endDate;
};

export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const getDatesInRange = (startDate, endDate) => {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

export const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const filterData = (data, date) => {
  return data.filter(
    (item) =>
      new Date(item.date).toDateString() === new Date(date).toDateString()
  );
};

export const compareDate = (date) => {
  const txtDate = new Date(date).setHours(0, 0, 0, 0);

  const currentDate = new Date().setHours(0, 0, 0, 0);

  if (txtDate - currentDate == 0) {
    return false;
  } else if (txtDate - currentDate > 0) {
    return false;
  }

  return true;
};
