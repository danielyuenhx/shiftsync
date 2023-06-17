import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  List,
  Row,
  Table,
  Tag,
  Timeline,
  Typography,
} from "antd";
import React, { useState } from "react";
import { columns, roleData, states, time } from "../../data/data";

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

  const state = renderState(props.date);

  return (
    <Row className="tw-w-full tw-justify-between tw-mt-2">
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
          title={
            <div className="tw-flex tw-flex-row ">
              <Typography className="tw-mr-4">
                Afternoon - 1pm to 6pm
              </Typography>
              {roleData.map((role) => {
                return <Tag color={role.color}>{role.title}</Tag>;
              })}
            </div>
          }
          extra={
            <Button type="text" className="tw-bg-primary tw-text-white">
              Approve
            </Button>
          }
        >
          <div>
            {/* Timeline */}
            <Timeline
              pending={state.state === "Pending" && "Pending..."}
              items={
                state.state === "Pending"
                  ? pending
                  : state.state === "Ready"
                  ? ready
                  : request
              }
            />

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
      </Col>
    </Row>
  );
};

export default CalendarContent;
