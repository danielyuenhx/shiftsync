import  { useState } from "react";
import { Typography, Tag, Button, Card, TimePicker, Modal, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const shifts = [
  { type: "Morning", time: "8am-6pm" },
  { type: "Afternoon", time: "12pm-10pm" },
  { type: "Full-Day", time: "8am-10pm" },
];

const AddShiftCard = () => {
  const shiftColour = (shift: string) => {
    if (shift === "Morning") {
      return "green";
    } else if (shift === "Afternoon") {
      return "red";
    } else if (shift === "Full-Day") {
      return "pink";
    }
  };

  const [deleteShift, setDeleteShift] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const showConfirmationModal = (e: any, role: string) => {
    setModalVisible(true);
    e.preventDefaul();
    setDeleteShift(role);
  };

  const handleDeleteRole = (e: any) => {
    // Perform delete operation
    console.log(`Deleting shift: ${deleteShift}`);

    // Close the modal and reset deleteRole state
    setModalVisible(false);
    setDeleteShift("");
  };

  const handleCancel = () => {
    // Close the modal and reset deleteRole state
    setModalVisible(false);
    setDeleteShift("");
  };

  const addNewShift = (e: any) => {
    console.log(e);

    console.log(
      e[0].toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <Card
      className="tw-w-auto"
      title={
        <Typography.Title level={5} className="tw-mt-2">
          Add Shifts
        </Typography.Title>
      }
    >
      <Row className="tw-mb-4">
        {shifts.map((shift: any) => {
          return (
            <Tag key={shift.type} color={shiftColour(shift.type)}>
              {`${shift.type} / ${shift.time}`}
              <DeleteOutlined
                className="tw-ml-2"
                onClick={(e) => showConfirmationModal(e, shift.time)}
              />
            </Tag>
          );
        })}
      </Row>

      <TimePicker.RangePicker
        minuteStep={5}
        showSecond={false}
        className="tw-w-full"
        onChange={addNewShift}
        format="HH:mm:ss"
      />

      <Row className="tw-justify-end tw-mt-4">
        <Button>Save</Button>
      </Row>
      <Modal
        title="Confirm Deletion"
        open={modalVisible}
        onOk={(e) => handleDeleteRole(e)}
        onCancel={handleCancel}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete the shift?</p>
      </Modal>
    </Card>
  );
};

export default AddShiftCard;
