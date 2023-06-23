import { Divider, Timeline } from "antd";
import { states } from "../../../data/data";
import { omegaLogs } from "../../../data/shifts";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { stateData } from "../../../redux/slices/demoSlice";

const CalendarLogs = (props: any) => {
  const state = useAppSelector(stateData);

  // Logs
  const requestedLogs = omegaLogs[0];
  const pendingLogs = omegaLogs[1];
  const somePendingLogs = omegaLogs[2];
  const algorithmLogs = omegaLogs[3];
  const approvedLogs = omegaLogs[4];
  const completedLogs = omegaLogs[5];
  const replacedLogs = omegaLogs[6];

  const renderLogs = () => {
    switch (state) {
      case "PENDING":
        return requestedLogs;
      case "SOMEPENDING":
        return pendingLogs;
      case "FINAL":
        return somePendingLogs;
      case "ALGORITHM":
        return algorithmLogs;
      case "APPROVAL":
        return approvedLogs;
      case "COMPLETED":
        return completedLogs;
      case "REJECTED":
        return replacedLogs;
      default:
        break;
    }
  };

  const logs = renderLogs();

  return (
    <div className="tw-flex tw-flex-col tw-justify-start tw-w-full tw-mt-6">
      <Divider orientation="left">Logs</Divider>

      <Timeline mode="left" items={logs} />
    </div>
  );
};

export default CalendarLogs;
