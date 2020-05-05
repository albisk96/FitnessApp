import React, { useState, useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { Table } from 'react-bootstrap';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { filterDate } from '../../../helpers/dates';

function Scheduler({ schedule, setSchedule }) {
  const filter = filterDate(schedule.freeDays || []);

  const excludedTimes = useMemo(
    () =>
      (schedule.workouts || [])
        .filter(workout => {
            return (
              format(schedule.date, 'MM/dd/yyyy') ===
              format(new Date(workout.date), 'MM/dd/yyyy')
            );
        })
        .map(x => {
            return new Date(x.date);
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schedule.date]
  );

  const timesColor = time => {
    console.log(excludedTimes);
    // return
  };

  return (
    <DatePicker
      selected={schedule.date}
      onChange={date => setSchedule({ ...schedule, date })}
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm"
      filterDate={filter}
      excludeTimes={excludedTimes}
      timeClassName={timesColor}
      minTime={setHours(
        setMinutes(new Date(), 0),
        (schedule.workHours && schedule.workHours.from) || 6
      )}
      maxTime={setHours(
        setMinutes(new Date(), 0),
        (schedule.workHours && schedule.workHours.to) || 23
      )}
      timeIntervals={60}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      inline
    />
  );
}

Scheduler.workHours = [
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
  { value: 17, label: '17' },
  { value: 18, label: '18' },
  { value: 19, label: '19' },
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
  { value: 23, label: '23' },
];

Scheduler.propTypes = {
  schedule: PropTypes.object,
  setSchedule: PropTypes.func,
};
export default Scheduler;