import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const sendCalendarShifts = () => {
  return api.post('/calendar/insert', {
    shifts: [
      {
        title: 'Morning Shift',
        location:
          'ShiftSync Starbucks',
        description: 'x1 Barista, x1 Cashier, x2 Waiter',
        startTime: '2023-06-22T08:00:00+08:00',
        endTime: '2023-06-22T18:00:00+08:00',
        emails: ['shiftsyncdemoemployee@gmail.com', 'daniel@gmail.com, zhengjie@gmail.com, jessica@gmail.com'],
      },
      {
        title: 'Afternoon Shift',
        location:
          'ShiftSync Starbucks',
        description: 'x1 Cashier, x1 Waiter',
        startTime: '2023-06-22T12:00:00+08:00',
        endTime: '2023-06-22T22:00:00+08:00',
        emails: ['stacy@gmail.com', 'kaiwen@gmail.com'],
      },
      {
        title: 'Full-day',
        location:
          'ShiftSync Starbucks',
        description: 'x1 Barista, x1 Waiter',
        startTime: '2023-06-22T08:00:00+08:00',
        endTime: '2023-06-22T22:00:00+08:00',
        emails: ['nicholas@gmail.com', 'davelee@gmail.com'],
      },
    ],
  });
};
