import { useState } from "react";
import { Input, Typography, Tag, Button, Card, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const roles = ["Cashier", "Waiter", "Barista"];

const AddRoleCard = () => {
  const roleColour = (role: string) => {
    if (role === "Cashier") {
      return "gold";
    } else if (role === "Waiter") {
      return "red";
    } else if (role === "Barista") {
      return "blue";
    }
  };

  const [deleteRole, setDeleteRole] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const showConfirmationModal = (e: any, role: string) => {
    setModalVisible(true);
    e.preventDefaul();
    setDeleteRole(role);
  };

  const handleDeleteRole = (e: any) => {
    // Perform delete operation
    console.log(`Deleting role: ${deleteRole}`);

    // Close the modal and reset deleteRole state
    setModalVisible(false);
    setDeleteRole("");
  };

  const handleCancel = () => {
    // Close the modal and reset deleteRole state
    setModalVisible(false);
    setDeleteRole("");
  };

  const addNewRole = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <Card
      bordered={false}
      className="tw-w-auto"
      title={
        <Typography.Title level={5} className="tw-mt-2">
          Adding Roles
        </Typography.Title>
      }
    >
      <div className="tw-flex tw-flex-row tw-w-64 tw-mb-4">
        {roles.map((role: string) => (
          <div
            key={role}
            style={{
              display: modalVisible && deleteRole === role ? "none" : "block",
            }}
          >
            <Tag color={roleColour(role)}>
              {role}
              <DeleteOutlined
                className="tw-ml-2"
                onClick={(e) => showConfirmationModal(e, role)}
              />
            </Tag>
          </div>
        ))}
      </div>

      <Input
        id="roles"
        placeholder="Add Roles"
        onChange={addNewRole}
        style={{ height: "35px" }}
      />

      <div className="tw-flex tw-justify-end tw-mt-4">
        <Button>Save</Button>
      </div>

      <Modal
        title="Confirm Deletion"
        open={modalVisible}
        onOk={(e) => handleDeleteRole(e)}
        onCancel={handleCancel}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete the role?</p>
      </Modal>
    </Card>
  );
};

export default AddRoleCard;
