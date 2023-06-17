import { Divider, Timeline } from "antd";
import { states } from "../../../data/data";

const CalendarLogs = (props: any) => {
  const renderLogs = (date: any) => {
    if (date === "2023-06-17") {
      return states[0].logs;
    } else if (date === "2023-06-18") {
      return states[1].logs;
    } else if (date === "2023-06-19") {
      return states[2].logs;
    } else {
      return states[0].logs;
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-justify-start tw-w-full tw-mt-6">
      <Divider orientation="left">Logs</Divider>

      <Timeline mode="left" items={renderLogs(props.date)} />
    </div>
  );
};

export default CalendarLogs;
