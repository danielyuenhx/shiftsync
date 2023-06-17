import { useState } from 'react';
import { Input, Typography, Tag, Button, Card, Modal, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { roleDetails } from '../../../redux/slices/roleSlice';

const roles = ['Cashier', 'Waiter', 'Barista'];

const AddRoleCard = () => {
  // const roles = useAppSelector(roleDetails);
  // console.log(roles);

  const roleColour = (role: string) => {
    if (role === 'Cashier') {
      return 'gold';
    } else if (role === 'Waiter') {
      return 'red';
    } else if (role === 'Barista') {
      return 'blue';
    }
  };

  const [deleteRole, setDeleteRole] = useState('');
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
    setDeleteRole('');
  };

  const handleCancel = () => {
    // Close the modal and reset deleteRole state
    setModalVisible(false);
    setDeleteRole('');
  };

  const addNewRole = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <Card
      bordered={false}
      className='tw-w-auto'
      title={
        <Typography.Title level={5} className='tw-mt-2'>
          Add Roles
        </Typography.Title>
      }
    >
      <Row className='tw-mb-4'>
        {roles.map((role: string) => (
          <div
            key={role}
            style={{
              display: modalVisible && deleteRole === role ? 'none' : 'block',
            }}
          >
            <Tag color={roleColour(role)}>
              {role}
              <DeleteOutlined
                className='tw-ml-2'
                onClick={(e) => showConfirmationModal(e, role)}
              />
            </Tag>
          </div>
        ))}
      </Row>

      <Input
        id='roles'
        placeholder='Add Roles'
        onChange={addNewRole}
        style={{ height: '35px' }}
      />

      <Row className='tw-justify-end tw-mt-4'>
        <Button>Add</Button>
      </Row>

      <Modal
        title='Confirm Deletion'
        open={modalVisible}
        onOk={(e) => handleDeleteRole(e)}
        onCancel={handleCancel}
        okText='Delete'
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete the role?</p>
      </Modal>
    </Card>
  );
};

export default AddRoleCard;
