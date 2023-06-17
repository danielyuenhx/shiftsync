import { useState } from 'react';
import {
  Calendar as AntCalendar,
  Card,
  Breadcrumb,
  Typography,
  Alert,
} from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import CalendarContent from './calendarContent/calendarContent';
import CalendarLogs from './calendarLogs/calendarLogs';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(
    undefined
  );

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value);
  };

  const selectDateHandler = (e: Dayjs) => {
    setSelectedDate(e);
  };

  const removeDateHandler = () => {
    setSelectedDate(undefined);
  };

  const renderContent = () => {
    if (selectedDate) {
      return (
        <>
          <CalendarContent date={selectedDate.format('YYYY-MM-DD')} />
          <CalendarLogs date={selectedDate.format('YYYY-MM-DD')} />
        </>
      );
    }
    // Render default content when no date is selected
  };

  // const dateCellRender = (date: Dayjs) => {
  //   const warningDates = [
  //     { day: 8, month: 5, year: 2023 }, // June 8, 2023
  //     { day: 9, month: 6, year: 2023 }, // June 9, 2023
  //     { day: 12, month: 7, year: 2023 }, // August 12, 2023
  //     { day: 15, month: 9, year: 2023 }, // October 15, 2023
  //   ];

  //   const isWarningDate = warningDates.some(
  //     ({ day, month, year }) =>
  //       date.date() === day && date.month() === month && date.year() === year
  //   );

  //   if (isWarningDate) {
  //     return (
  //       <div className="tw-relative">
  //         <Alert message="Warning" type="warning" showIcon />
  //       </div>
  //     );
  //   }
  //   return "Good to go"
  // };

  const breadcrumbItems = selectedDate
    ? [
        <Breadcrumb.Item
          key='calendar'
          onClick={removeDateHandler}
          className='tw-cursor-pointer'
        >
          {selectedDate.format('MMMM')}
        </Breadcrumb.Item>,
        <Breadcrumb.Item key='selectedDate'>
          {selectedDate.format('YYYY-MM-DD')}
        </Breadcrumb.Item>,
      ]
    : [
        // <Breadcrumb.Item key='calendar'>
        //   {selectedDate.format('MMMM')}
        // </Breadcrumb.Item>,
      ];

  return (
    <Card className=''>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      {!selectedDate && (
        <AntCalendar
          onPanelChange={onPanelChange}
          onSelect={(e) => selectDateHandler(e)}
          // dateCellRender={dateCellRender}
        />
      )}
      {renderContent()}
    </Card>
  );
};

export default Calendar;
