import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Table,
  Tag,
  Timeline,
  Typography,
  notification,
} from "antd";
import { columns, roleData, states, time, shiftData } from "../../../data/data";
import CalendarShiftBlock from "../calendarShiftBlock/calendarShiftBlock";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { calendarShift } from "../../../redux/slices/shiftSlice";
import { useState } from "react";

const CalendarContent = (props: any) => {
  const shift = useAppSelector(calendarShift);

  const request = [
    {
      children: "Send request",
      color: "green",
    },
    {
      children: "Pending replies",
      color: "gray",
    },
    {
      children: "Ready for approval",
      color: "gray",
    },
  ];

  const pending = [
    {
      children: "Send request",
      color: "green",
    },
  ];

  const ready = [
    {
      children: "Send request",
      color: "green",
    },
    {
      children: "Pending replies",
      color: "green",
    },
    {
      children: "Ready for approval",
      color: "green",
    },
  ];

  const renderState = (date: any) => {
    if (date === "2023-06-19") {
      return { state: states[0].state, employee: states[0].employee };
    } else if (date === "2023-06-20") {
      return { state: states[1].state, employee: states[1].employee };
    } else if (date === "2023-06-21") {
      return { state: states[2].state, employee: states[2].employee };
    } else {
      return { state: states[0].state, employee: states[0].employee };
    }
  };

  const renderTime = () => {
    return shiftData.map((data) => {
      if (data.title === shift) {
        return `${data.startTime}:00:00 - ${data.endTime}:00:00`;
      }
    });
  };

  const state = renderState(props.date);

  const [api, contextHolder] = notification.useNotification();
  const [pressed, setPressed] = useState(false);

  const openSuccessNotification = () => {
    if (state.state === "Request") {
      api.info({
        message: "Requested Shift!",
        description: "Shift has been requested from employee through WhatsApp!",
        placement: "bottomRight",
      });
    } else {
      api.success({
        message: "Successfully approved Shift!",
        description:
          "Shift has been approved and sent to employee through WhatsApp!",
        placement: "bottomRight",
      });
    }
    setPressed(true);
  };

  return (
    <Row className="tw-w-full tw-justify-around tw-align-top tw-mt-4">
      {contextHolder}
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
              />
            ))}
            {time.map((time) => (
              <Divider orientation="left">{time}</Divider>
            ))}
          </div>
        </div>
      </Col>
      <Col span={15}>
        <Card
          className="tw-h-auto"
          title={
            <Row className="tw-items-center !tw-min-h-[60px]">
              <Typography.Title level={3} className="!tw-m-0">
                {shift}
              </Typography.Title>
            </Row>
          }
        >
          <div>
            <Col className="tw-h-[150px]">
              <Timeline
                className="tw-absolute tw-right-10 tw-w-[500px] tw-mt-4"
                pending={state.state === "Pending" && "Pending replies"}
                mode="right"
                items={
                  state.state === "Pending"
                    ? pending
                    : state.state === "Ready"
                    ? ready
                    : request
                }
              />
              <Row className="tw-h-6 tw-mb-4">
                {roleData.map((role) => {
                  return <Tag color={role.color}>{role.title}</Tag>;
                })}
              </Row>
              <Row className="tw-flex tw-flex-col">
                <Typography className="tw-font-semibold">Time</Typography>
                <Typography.Text>{renderTime()}</Typography.Text>
              </Row>
            </Col>

            {/* <List
              className="tw-mb-4"
              itemLayout="horizontal"
              dataSource={roleData}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    className="tw-font-semibold"
                    title={item.title}
                  />
                </List.Item>
              )}
            /> */}

            {/* Employees */}
            <Table
              dataSource={state.employee}
              columns={columns}
              pagination={false}
            />
          </div>
        </Card>
        {state.state !== "Pending" && (
          <Button
            onClick={openSuccessNotification}
            disabled={pressed}
            type={pressed ? "default" : "text"}
            className="tw-bg-primary tw-text-white tw-float-right tw-mt-4"
          >
            {state.state === "Request"
              ? "Request shift availability"
              : "Approve shift"}
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default CalendarContent;
