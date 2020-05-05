import {
    isSaturday,
    isFriday,
    isSunday,
    isThursday,
    isTuesday,
    isWednesday,
    isMonday,
  } from 'date-fns';
  
  const filterDate = freeDays => date => {
    const promises = freeDays
      .map(day => {
        switch (day) {
          case 'Sunday':
            return isSunday(date);
          case 'Monday':
            return isMonday(date);
          case 'Tuesday':
            return isTuesday(date);
          case 'Wednesday':
            return isWednesday(date);
          case 'Thursday':
            return isThursday(date);
          case 'Friday':
            return isFriday(date);
          case 'Saturday':
            return isSaturday(date);
          default:
            return null;
        }
      })
      .filter(x => x);
  
    if (promises.some(value => value === true)) {
      return false;
    }
    return true;
  };
  
  export { filterDate };