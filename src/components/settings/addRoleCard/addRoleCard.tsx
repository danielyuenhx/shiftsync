import { useState } from "react";
import {
  Input,
  Typography,
  Tag,
  Button,
  Card,
  Modal,
  Row,
  notification,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { createRoles, roleDetails } from "../../../redux/slices/roleSlice";

const roles = ["Cashier", "Waiter", "Barista"];

const AddRoleCard = () => {
  // const roles = useAppSelector(roleDetails);
  // console.log(roles);

  const roleColour = (role: string) => {
    if (role === "Cashier") {
      return "gold";
    } else if (role === "Waiter") {
      return "red";
    } else if (role === "Barista") {
      return "blue";
    } else if (role === "Janitor") {
      return "purple";
    }
  };

  const dispatch = useAppDispatch();
  const [deleteRole, setDeleteRole] = useState("");
  const [newRole, setNewRole] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const roles = useAppSelector(roleDetails);

  const showConfirmationModal = (e: any, role: string) => {
    setModalVisible(true);
    e.preventDefault();
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
    setNewRole(e.target.value);
  };

  const saveHandler = async () => {
    await createRoles(dispatch, { name: newRole });
    openSuccessNotification();
  };

  const [api, contextHolder] = notification.useNotification();

  const openSuccessNotification = () => {
    api.success({
      message: "Successfully added Role!",
      description: "Role added to the database.",
      placement: "bottomRight",
    });
  };

  return (
    <Card
      bordered={false}
      className="tw-w-[40%]"
      title={
        <Typography.Title level={5} className="tw-mt-2">
          Add Roles
        </Typography.Title>
      }
    >
      {contextHolder}
      <Row className="tw-mb-4">
        {roles.map((role: any) => {
          return (
            <div
              style={{
                display:
                  modalVisible && deleteRole === role.name ? "none" : "block",
              }}
            >
              <Tag color={roleColour(role.name)}>
                {role.name}
                <DeleteOutlined
                  className="tw-ml-2"
                  onClick={(e) => showConfirmationModal(e, role.name)}
                />
              </Tag>
            </div>
          );
        })}
      </Row>

      <Input
        id="roles"
        placeholder="Add Roles"
        onChange={addNewRole}
        style={{ height: "35px" }}
      />

      <Row className="tw-justify-end tw-mt-4">
        <Button onClick={saveHandler}>Add</Button>
      </Row>

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
