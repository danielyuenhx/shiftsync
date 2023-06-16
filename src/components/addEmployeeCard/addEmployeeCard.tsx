import  { useState } from "react";
import { Input, Typography, Button, Card, Select, Form, Modal } from "antd";

const AddEmployeeCard = () => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [formValues, setFormValues] = useState<any>({});

  const onFinish = (values: any) => {
    console.log(values);
    setFormValues(values);
    setConfirmModalVisible(true);
  };

  const handleConfirmModalOk = () => {
    console.log("Confirmed");
    setConfirmModalVisible(false);
    setFormValues("");
    // Perform save operation or API call here
  };

  const handleConfirmModalCancel = () => {
    setConfirmModalVisible(false);
  };

  return (
    <Card bordered={false} className="tw-w-auto">
      <Typography.Title level={5} className="tw-mt-2">
        Adding Employees
      </Typography.Title>

      <Form
        name="addEmployeeForm"
        onFinish={onFinish}
        layout="vertical"
        className="tw-mt-4"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter the employee name",
            },
          ]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          label="Rate"
          name="rate"
          rules={[
            {
              required: true,
              message: "Please enter the hourly rate",
            },
          ]}
        >
          <Input type="number" placeholder="Enter hourly rate" />
        </Form.Item>

        <Form.Item
          label="Number"
          name="number"
          rules={[
            {
              required: true,
              message: "Please enter the phone number",
            },
          ]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[
            {
              required: true,
              message: "Please select a role",
            },
          ]}
        >
          <Select placeholder="Select role" mode="multiple">
            <Select.Option value="Cashier">Cashier</Select.Option>
            <Select.Option value="Waiter">Waiter</Select.Option>
            <Select.Option value="Barista">Barista</Select.Option>
          </Select>
        </Form.Item>

        <div className="tw-flex tw-justify-end">
          <Form.Item>
            <Button htmlType="submit">Save</Button>
          </Form.Item>
        </div>
      </Form>
      <Modal
        title="Confirm Employee Details"
        open={confirmModalVisible}
        onOk={handleConfirmModalOk}
        onCancel={handleConfirmModalCancel}
        okText="Save"
        okButtonProps={{
          type: "primary",
          style: { backgroundColor: "#19c89c" },
        }}
      >
        <p>Name: {formValues.name}</p>
        <p>Rate: {formValues.rate} / Hour</p>
        <p>Number: {formValues.number}</p>
        <p>
          Role:{" "}
          {formValues?.role?.map((role: any, index: number) => (
            <span key={role}>
              {role}
              {index !== formValues?.role?.length - 1 && " / "}
            </span>
          ))}
        </p>
      </Modal>
    </Card>
  );
};

export default AddEmployeeCard;
