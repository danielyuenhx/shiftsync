import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  List,
  Row,
  Table,
  Timeline,
} from "antd";
import React, { useState } from "react";
import { columns, dataTable, roleData, time } from "../../data/data";

const CalendarContent = (props: any) => {
  const request = [
    {
      children: "Request",
      color: "green",
    },
    {
      children: "Pending",
      color: "gray",
    },
    {
      children: "Ready",
      color: "gray",
    },
  ];

  const pending = [
    {
      children: "Request",
      color: "green",
    },
  ];

  const ready = [
    {
      children: "Request",
      color: "green",
    },
    {
      children: "Pending",
      color: "green",
    },
    {
      children: "Ready",
      color: "green",
    },
  ];
  const [state, setState] = useState<string | "Request" | "Pending" | "Ready">(
    "Request"
  );

  return (
    <Row className="tw-w-full  tw-justify-between">
      <Divider orientation="left">{props.date}</Divider>

      <Col span={8}>
        <Card title="Timeline" className="tw-min-h-[600px]">
          <div className="tw-max-h-[500px] tw-overflow-y-scroll tw-pr-4">
            {time.map((time) => {
              // Add a conditional check to insert a div on top of the divider
              if (time === "1pm" || time === "8pm") {
                return (
                  <>
                    <div className="tw-flex tw-items-center tw-mb-2">
                      <Divider className="tw-flex-grow tw-bg-teal-400" />
                    </div>
                    <Divider orientation="left">{time}</Divider>
                  </>
                );
              } else if (time === "11am" || time === "5pm") {
                return (
                  <>
                    <div className="tw-flex tw-items-center tw-mb-2">
                      <Divider className="tw-flex-grow tw-bg-red-400" />
                    </div>
                    <Divider orientation="left">{time}</Divider>
                  </>
                );
              } else {
                return <Divider orientation="left">{time}</Divider>;
              }
            })}
          </div>
        </Card>
      </Col>
      <Col span={15}>
        <Card
          className="tw-h-auto"
          title="Afternoon - 1pm to 6pm"
          extra={
            <Button type="text" className="tw-bg-primary tw-text-white">
              Approve
            </Button>
          }
        >
          <div>
            {/* Timeline */}
            <Timeline
              pending={state === "Pending" && "Pending..."}
              items={
                state === "Pending"
                  ? pending
                  : state === "Ready"
                  ? ready
                  : request
              }
            />

            {/* Roles needed */}
            <List
              itemLayout="horizontal"
              dataSource={roleData}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={item.title}
                  />
                </List.Item>
              )}
            />

            {/* Employees */}
            <Table
              dataSource={dataTable}
              columns={columns}
              pagination={false}
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default CalendarContent;
