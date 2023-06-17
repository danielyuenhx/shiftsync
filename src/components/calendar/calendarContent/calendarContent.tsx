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
    if (date === "2023-06-17") {
      return { state: states[0].state, employee: states[0].employee };
    } else if (date === "2023-06-18") {
      return { state: states[1].state, employee: states[1].employee };
    } else if (date === "2023-06-19") {
      return { state: states[2].state, employee: states[2].employee };
    } else {
      return { state: states[0].state, employee: states[0].employee };
    }
  };

  const renderTime = () => {
    shiftData.map((data) => {
      if (data.title === shift) {
        console.log("content", data.title);
        console.log(data.startTime, data.endTime);
        return data.startTime - data.endTime;
      }
    });

    return "";
  };

  const state = renderState(props.date);

  const [api, contextHolder] = notification.useNotification();

  const openSuccessNotification = () => {
    console.log("ran")
    api.info({
      message: 'Successfully requested Shift!',
      description:
        'Shift has been requested from employee through WhatsApp!',
      // placement: 'bottomRight',
    });
  };



  return (
    <Row className="tw-w-full tw-justify-between tw-items-center tw-mt-2">
      <Col span={8} className="tw-m-4">
        <div className="tw-p-2 tw-border-gray-400 tw-border-[1px] tw-border-opacity-20 tw-rounded-xl">
          <div className="tw-max-h-[550px] tw-overflow-y-scroll tw-pr-4 tw-relative">
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
              <Row>
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
            type="text"
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
