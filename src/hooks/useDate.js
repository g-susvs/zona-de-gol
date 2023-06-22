export const useDate = () => {
  const currentDate = new Date().toLocaleDateString();
  const dateArr = currentDate.split("/");
  const currentMounth = dateArr[1].length === 1 ? "0" + dateArr[1] : dateArr[1];
  const currentDay = dateArr[0].length === 1 ? "0" + dateArr[0] : dateArr[0];
  const currentDateValue = `${dateArr[2]}-${currentMounth}-${currentDay}`;

  const currentHour = new Date().getHours() + 1;

  return {
    currentDateValue,
    currentHour,
  };
};
