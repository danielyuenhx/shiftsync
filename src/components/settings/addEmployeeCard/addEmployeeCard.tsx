import { useState } from 'react';
import {
  Input,
  Typography,
  Button,
  Card,
  Select,
  Form,
  Modal,
  notification,
} from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { roleDetails } from '../../../redux/slices/roleSlice';
import { createEmployees } from '../../../redux/slices/employeeSlice';

const AddEmployeeCard = () => {
  const roles = useAppSelector(roleDetails);
  console.log(roles);
  const dispatch = useAppDispatch();

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [formValues, setFormValues] = useState<any>({});

  const onFinish = (values: any) => {
    setFormValues(values);

    const roleIds = values.role.map((roleName: string) => {
      return roles.find((role: any) => role.name === roleName).id;
    });

    const mappedEmployee = {
      name: values.name,
      phoneNumber: values.phoneNumber,
      hourlyRate: values.hourlyRate,
      roleIds,
    };
    createEmployees(dispatch, mappedEmployee);
    openSuccessNotification();

    setFormValues('');
  };

  const handleConfirmModalOk = () => {
    setConfirmModalVisible(false);
    setFormValues('');
    // Perform save operation or API call here
  };

  const handleConfirmModalCancel = () => {
    setConfirmModalVisible(false);
  };

  const [api, contextHolder] = notification.useNotification();

  const openSuccessNotification = () => {
    api.success({
      message: 'Successfully added Employee!',
      description:
        'Employee added to the database. Check it out in the Employees tab.',
      placement: 'bottomRight',
    });
  };

  return (
    <Card bordered={false} className="tw-w-[40%]">
      <Typography.Title level={5} className="tw-mt-2">
        Add Employees
      </Typography.Title>

      <Form
        name='addEmployeeForm'
        onFinish={onFinish}
        layout='vertical'
        className='tw-mt-4'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please enter employee name',
            },
          ]}
        >
          <Input placeholder='Enter name' />
        </Form.Item>

        <Form.Item
          label='Rate'
          name='hourlyRate'
          rules={[
            {
              required: true,
              message: 'Please enter hourly rate',
            },
          ]}
        >
          <Input type='number' placeholder='Enter hourly rate' />
        </Form.Item>

        <Form.Item
          label='Number'
          name='phoneNumber'
          rules={[
            {
              required: true,
              message: 'Please enter phone number',
            },
          ]}
        >
          <Input placeholder='Enter phone number' />
        </Form.Item>

        <Form.Item
          label='Role'
          name='role'
          rules={[
            {
              required: true,
              message: 'Please select a role',
            },
          ]}
        >
          <Select placeholder='Select role' mode='multiple'>
            {roles.map((role: any) => (
              <Select.Option value={role.name}>{role.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div className='tw-flex tw-justify-end'>
          <Form.Item>
            <Button htmlType='submit'>Add</Button>
          </Form.Item>
        </div>
      </Form>
      <Modal
        title='Confirm Employee Details'
        open={confirmModalVisible}
        onOk={handleConfirmModalOk}
        onCancel={handleConfirmModalCancel}
        okText='Save'
        okButtonProps={{
          type: 'primary',
          style: { backgroundColor: '#19c89c' },
        }}
      >
        <p>Name: {formValues.name}</p>
        <p>Rate: {formValues.rate} / Hour</p>
        <p>Number: {formValues.number}</p>
        <p>
          Role:{' '}
          {formValues?.role?.map((role: any, index: number) => (
            <span key={role}>
              {role}
              {index !== formValues?.role?.length - 1 && ' / '}
            </span>
          ))}
        </p>
      </Modal>
    </Card>
  );
};

export default AddEmployeeCard;
