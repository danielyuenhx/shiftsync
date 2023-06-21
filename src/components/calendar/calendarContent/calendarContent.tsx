import { Col, Divider, Row } from "antd";
import { time, shiftData, tableData } from "../../../data/data";
import CalendarShiftBlock from "../calendarShiftBlock/calendarShiftBlock";
import { useAppSelector } from "../../../redux/hooks/hooks";
import ShiftCard from "./shiftCard/shiftCard";
import { shiftId, state } from "../../../redux/slices/shiftSlice";
import { useEffect, useState } from "react";

const CalendarContent = () => {
  const [contentData, setContentData] = useState<any>(
    getTableDataByStateAndShiftId("Request", 1)
  );
  function getTableDataByStateAndShiftId(state: string, shiftId: number) {
    return tableData.find(
      (item) => item.state === state && item.shiftId === shiftId
    );
  }

  const selectedState = useAppSelector(state);
  const selectedShiftId = useAppSelector(shiftId);

  useEffect(() => {
    const data = getTableDataByStateAndShiftId(selectedState, selectedShiftId);
    setContentData(data);
  }, [selectedState, selectedShiftId]);

  return (
    <Row className="tw-w-full tw-justify-around tw-align-top tw-mt-4">
      <Col span={8}>
        <div className="tw-p-2 tw-border-gray-400 tw-border-[1px] tw-border-opacity-20 tw-rounded-xl tw-relative">
          <div className="tw-max-h-[625px] tw-overflow-y-scroll tw-pr-4 tw-relative">
            {shiftData.map((shift, index) => (
              <CalendarShiftBlock
                blockIndex={index}
                startTime={shift.startTime}
                endTime={shift.endTime}
                colour={shift.colour}
                shiftName={shift.title}
                shiftId={shift.shiftId}
                selectedState={selectedState}
              />
            ))}
            {time.map((time) => (
              <Divider orientation="left">{time}</Divider>
            ))}
          </div>
        </div>
      </Col>
      <Col span={15}>
        <ShiftCard contentData={contentData} />
      </Col>
    </Row>
  );
};

export default CalendarContent;
