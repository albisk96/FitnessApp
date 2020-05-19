import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { alertActions } from '../../../redux/alert/alert.actions';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

function TrainerSchedule() {
  const dispatch = useDispatch();
  const [schedule, setSchedule] = useState({
    freeDays: TrainerSchedule.days.slice(5),
    workDays: 5,
    workHours: {
      from: { value: 8, label: '8' },
      to: { value: 17, label: '17' },
    },
    price: 10,
  });
  const [alert, setAlert] = useState('');
  useEffect(() => {
    setAlert('');
  }, [schedule.workDays, schedule.freeDays]);


  useEffect(() => {
    async function getSchedule() {
      const res = await axios.get('/api/coach/schedule');
      if (res.data) {
        setSchedule({
          price: res.data.price || 1000,
          freeDays: res.data.freeDays
            .map(x => {
              const days = TrainerSchedule.days.filter(y => y.value === x);
              return days[0];
            })
            .filter(x => x),
          workHours: {
            from: {
              value: res.data.workHours && res.data.workHours.from,
              label: `${res.data.workHours && res.data.workHours.from || 8 }`,
            },
            to: {
              value:  res.data.workHours && res.data.workHours.to,
              label: `${res.data.workHours && res.data.workHours.to || 17 }`,
            },
          },
          workDays: res.data.workDays || 7 - res.data.freeDays.length,
        });
      }
    }
    getSchedule();
  }, []);

  function handleMultipleSelect(value) {
    if ((value || []).length <= 7 - schedule.workDays) {
      setSchedule({ ...schedule, freeDays: value });
    } else {
      setAlert(
        `You can choose only ${7 -
          schedule.workDays} free days`
      );
    }
  }
  
  function handeScheduleFormSubmit(e) {
    e.preventDefault();
    if (schedule.freeDays.length !== 7 - schedule.workDays) {
      setAlert(`You must choose ${7 - schedule.workDays} free days`);
    } else {
      axios
        .put('/api/coach/schedule', {
          ...schedule,
          workHours: {
            from: schedule.workHours.from.value,
            to: schedule.workHours.to.value,
          },
          freeDays: schedule.freeDays.map(x => x.value),
          price: +schedule.price,
          
        })
        .then(res => dispatch(alertActions.success('Work Schedule updated successfully!')))
        .catch(err => {
          dispatch(alertActions.error('Something went wrong, please try again!'));
        });
    }
  }


  return (
    <Container style={{ marginTop: '2em' }}>
      <h2 className="text-center">Schedule</h2>
      <Form onSubmit={handeScheduleFormSubmit}>
        <Form.Row style={{ justifyContent: 'center' }}>
          <Form.Group as={Col} md="4" controlId="workDays">
            <Form.Label>How many days per week will you work?</Form.Label>
            <Form.Control
              as="select"
              onChange={e =>
                setSchedule({
                  ...schedule,
                  workDays: e.target.value,
                  freeDays: TrainerSchedule.days.slice(e.target.value),
                })
              }
              value={schedule.workDays}
            >
              {[1, 2, 3, 4, 5, 6, 7].map(x => (
                <option key={x} value={x}>{`${x} days`}</option>
              ))}
            </Form.Control>
          </Form.Group>
          {schedule.workDays !== '7' && (
            <Form.Group as={Col} md="4" controlId="freeDays">
              <Form.Label>Select free days</Form.Label>
              <Select
                isMulti
                value={schedule.freeDays}
                onChange={handleMultipleSelect}
                options={TrainerSchedule.days}
              />
              {alert && (
                <Form.Text className="text-muted-alert" style={{ color: 'red' }}>{alert}</Form.Text>
              )}
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row style={{ justifyContent: 'center' }}>
          <Form.Group as={Col} md="4" controlId="Hours">
            <h4 className="text-center">Work Hours</h4>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="fromHours">
                <Form.Label>From</Form.Label>
                <Select
                  value={schedule.workHours.from}
                  onChange={value =>
                    setSchedule({
                      ...schedule,
                      workHours: {
                        ...schedule.workHours,
                        from: value,
                      },
                    })
                  }
                  options={TrainerSchedule.workHours.slice(
                    0,
                    TrainerSchedule.workHours.length - 1
                  )}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="toHours">
                <Form.Label>To</Form.Label>
                <Select
                  value={schedule.workHours.to}
                  onChange={value =>
                    setSchedule({
                      ...schedule,
                      workHours: {
                        ...schedule.workHours,
                        to: value,
                      },
                    })
                  }
                  options={TrainerSchedule.workHours.slice(
                    schedule.workHours.from.value - 5
                  )}
                />
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="toHours">
            <h4 className="text-center">Price</h4>
            <Form.Label>Workout price for hour</Form.Label>
            <Form.Control
              type="number"
              value={schedule.price}
              onChange={e =>
                setSchedule({ ...schedule, price: e.target.value })
              }
            />
          </Form.Group>
        </Form.Row>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}

TrainerSchedule.days = [
  { value: 'Monday', label: 'Pirmadienis' },
  { value: 'Tuesday', label: 'Antradienis' },
  { value: 'Wednesday', label: 'Treciadienis' },
  { value: 'Thirdsday', label: 'Ketvirtadienis' },
  { value: 'Friday', label: 'Penktadienis' },
  { value: 'Saturday', label: 'Sestadienis' },
  { value: 'Sunday', label: 'Sekmadienis' },
];

TrainerSchedule.workHours = [
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

export default TrainerSchedule;