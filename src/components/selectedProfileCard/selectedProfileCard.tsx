import {
  Input,
  Select,
  Typography,
  Table,
  Tag,
  Card,
  Button,
  Modal,
} from "antd";
import { useState } from "react";

interface ProfileProps {
  profile: {
    name: string;
    role: Array<string>;
    hourlyRate: number;
    number: string;
    shift: string;
  };
}

const columns = [
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "Availability",
    dataIndex: "availability",
    key: "availability",
    render: (availability: any) => (
      <Tag color={availability ? "green" : "red"}>
        {availability ? "Yes" : "No"}
      </Tag>
    ),
  },
  // {
  //   title: "Time",
  //   dataIndex: "time",
  //   key: "time",
  //   render: (time: any) =>
  //     time?.map((time: any) => {
  //       return <Tag color={"blue"}>{time}</Tag>;
  //     }),
  // },
];

const SelectedProfileCard = (props: ProfileProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRateChange = (e: any) => {
    console.log(e.target.value);
  };

  const handlePhoneNumberChange = (e: any) => {
    console.log(e.target.value);
  };

  const handleDropdownChange = (values: any) => {
    console.log(values);
  };

  const editHandler = (e: any) => {
    setEdit(!edit);
  };

  const deleteHandler = (e: any) => {
    setModalVisible(true);
  };

  const handleDeleteRole = (e: any) => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Card
      title={
        <Typography.Title
          className="tw-mt-4"
          level={2}
          style={{ fontSize: "24px" }}
        >
          {props?.profile?.name}
        </Typography.Title>
      }
      extra={
        <div className="tw-w-56 tw-flex tw-justify-between tw-flex-row">
          <Button
            onClick={editHandler}
            block
            style={{ width: "100px", color: "black" }}
          >
            {edit ? "Save" : "Edit"}
          </Button>
          <Button onClick={deleteHandler} danger style={{ width: "100px" }}>
            Delete
          </Button>
        </div>
      }
    >
      <div className="tw-flex tw-flex-col tw-gap-4">
        <Typography.Title level={5}>Schedule</Typography.Title>
        <Table
          //dataSource={props?.profile?.shift}
          columns={columns}
          pagination={false}
          showHeader={true}
        />
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <Typography.Title level={5}>Rate</Typography.Title>
          <Input
            id="rate"
            placeholder="Rate"
            value={props?.profile?.hourlyRate}
            onChange={handleRateChange}
            disabled={!edit}
            style={{ height: "35px" }}
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <Typography.Title level={5}>Phone Number</Typography.Title>
          <Input
            id="phoneNumber"
            placeholder="Phone Number"
            value={props?.profile?.number}
            onChange={handlePhoneNumberChange}
            disabled={!edit}
            style={{ height: "35px" }}
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <Typography.Title level={5}>Roles</Typography.Title>
          <Select
            id="values"
            mode="multiple"
            placeholder="Select roles"
            value={props?.profile?.role}
            onChange={handleDropdownChange}
            style={{ width: "100%", height: "35px" }}
            disabled={!edit}
          >
            <Select.Option value="Value 1">Value 1</Select.Option>
            <Select.Option value="Value 2">Value 2</Select.Option>
            <Select.Option value="Value 3">Value 3</Select.Option>
          </Select>
        </div>
      </div>
      <Modal
        title="Confirm Deletion"
        open={modalVisible}
        onOk={(e) => handleDeleteRole(e)}
        onCancel={handleCancel}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete {props?.profile?.name} ?</p>
      </Modal>
    </Card>
  );
};

export default SelectedProfileCard;
