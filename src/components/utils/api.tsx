import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const createShifts = () => {
  return api.post('/calendar/insert', {
    shifts: [
      {
        title: 'Morning Shift',
        location:
          'ShiftSync HQ',
        description: '2 Cashiers',
        startTime: '2023-06-22T08:00:00+08:00',
        endTime: '2023-06-22T18:00:00+08:00',
        emails: ['mike@gmail.com', 'daniel@gmail.com'],
      },
      {
        title: 'Afternoon Shift',
        location:
          'ShiftSync Starbucks',
        description: '1 Barista, 1 Cashier',
        startTime: '2023-06-22T12:00:00+08:00',
        endTime: '2023-06-22T22:00:00+08:00',
        emails: ['nick@gmail.com', 'zhengjie@gmail.com'],
      },
      {
        title: 'Full-day',
        location:
          'ShiftSync Toilet',
        description: '2 Janitors',
        startTime: '2023-06-22T08:00:00+08:00',
        endTime: '2023-06-22T22:00:00+08:00',
        emails: ['james@gmail.com', 'ben@gmail.com'],
      },
    ],
  });
};
