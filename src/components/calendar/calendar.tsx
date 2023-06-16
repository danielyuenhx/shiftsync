import { useState } from "react";
import { Calendar as AntCalendar, Card, Breadcrumb, Typography } from "antd";
import type { Dayjs } from "dayjs";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const selectDateHandler = (e: Dayjs) => {
    setSelectedDate(e);
  };

  const removeDateHandler = () => {
    setSelectedDate(null);
  };

  const renderContent = () => {
    if (selectedDate) {
      // Render the layout based on the selected date
      return (
        <div className="tw-flex tw-flex-col">
          {selectedDate.format("YYYY-MM-DD")}
          <Typography>YOUR CONTENT IS RIGHT FOKING HERE</Typography>
        </div>
      );
    }
    // Render default content when no date is selected
  };

  const breadcrumbItems = selectedDate
    ? [
        <Breadcrumb.Item key="calendar" onClick={removeDateHandler}>
          Calendar
        </Breadcrumb.Item>,
        <Breadcrumb.Item key="selectedDate">
          {selectedDate.format("YYYY-MM-DD")}
        </Breadcrumb.Item>,
      ]
    : [<Breadcrumb.Item key="calendar">Calendar</Breadcrumb.Item>];

  return (
    <Card className="tw-m-4">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      {!selectedDate && (
        <AntCalendar
          onPanelChange={onPanelChange}
          onSelect={(e) => selectDateHandler(e)}
        />
      )}
      {renderContent()}
    </Card>
  );
};

export default Calendar;
