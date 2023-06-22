import { Col, Divider, Row } from "antd";
import { time, shiftData as data } from "../../../data/data";
import CalendarShiftBlock from "../calendarShiftBlock/calendarShiftBlock";
import ShiftCard from "./shiftCard/shiftCard";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { stateData, shiftData } from "../../../redux/slices/demoSlice";
import { renderStateData } from "../../../customHooks/renderStateData";
import { columnsWithState, columnsWithoutState } from "../../../data/newData";

const CalendarContent = () => {
  // Data from redux
  const state = useAppSelector(stateData);
  const shift = useAppSelector(shiftData);

  // Getting data from each state
  const { title, step, stepError, buttonText, showButton } =
    renderStateData(state);

  // Getting table structure
  const renderTableStructure = (state: any) => {
    switch (state) {
      case "PENDING":
        return columnsWithState;
      default:
        return columnsWithoutState;
    }
  };

  const columns = renderTableStructure(state);

  return (
    <Row className="tw-w-full tw-justify-around tw-align-top tw-mt-4">
      <Col span={8}>
        <div className="tw-p-2 tw-border-gray-400 tw-border-[1px] tw-border-opacity-20 tw-rounded-xl tw-relative">
          <div className="tw-max-h-[625px] tw-overflow-y-scroll tw-pr-4 tw-relative">
            {data.map((shift, index) => (
              <CalendarShiftBlock
                blockIndex={index}
                startTime={shift.startTime}
                endTime={shift.endTime}
                colour={shift.colour}
                shiftName={shift.title}
                shift={shift.shift}
              />
            ))}
            {time.map((time) => (
              <Divider orientation="left">{time}</Divider>
            ))}
          </div>
        </div>
      </Col>
      <Col span={15}>
        <ShiftCard
          state={state}
          buttonText={buttonText}
          title={title}
          step={step}
          stepError={stepError}
          showButton={showButton}
          columns={columns}
          shift={shift}
        />
      </Col>
    </Row>
  );
};

export default CalendarContent;
