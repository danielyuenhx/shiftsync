import { useState } from 'react';
import {
  Typography,
  Tag,
  Button,
  Card,
  TimePicker,
  Modal,
  Row,
  Col,
  Input,
  Select,
  Checkbox,
  InputNumber,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const AddShiftCard = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const shiftColour = (shift: string) => {
    if (shift === 'Morning') {
      return 'green';
    } else if (shift === 'Afternoon') {
      return 'red';
    } else if (shift === 'Full-Day') {
      return 'pink';
    }
  };

  const [deleteShift, setDeleteShift] = useState('');
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
    setDeleteShift('');
  };

  const handleCancel = () => {
    // Close the modal and reset deleteRole state
    setModalVisible(false);
    setDeleteShift('');
  };

  const [name, setName] = useState('');
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const handleTimeChange = (time: any, timeString: string[]) => {
    setStartTime(timeString[0]);
    setEndTime(timeString[1]);
  };

  const [role, setRole] = useState([]);
  const handleRoleChange = (e: any) => {
    setRole(e);
  };

  const [roleNumber, setRoleNumber] = useState({});
  const handleNumberChange = (e: any) => {
    console.log(e);
    setRoleNumber((prev) => ({ ...prev, e: e }));
  };

  return (
    <Card
      className='tw-w-auto'
      title={
        <Typography.Title level={4} className='tw-mt-2'>
          Add Shift
        </Typography.Title>
      }
    >
      <Row className='tw-gap-14 tw-text-xl'>
        <Col span={11} className='tw-gap-4 tw-flex tw-flex-col'>
          <Input
            id='name'
            placeholder='Shift Name'
            value={name}
            onChange={handleNameChange}
            size='large'
          />
          <TimePicker.RangePicker
            minuteStep={5}
            showSecond={false}
            className='tw-w-full'
            onChange={handleTimeChange}
            format='HH:mm:ss'
            size='large'
          />
          <Select
            id='values'
            mode='multiple'
            placeholder='Select roles'
            onChange={handleRoleChange}
            className='tw-h-[35px] tw-w-full'
            size='large'
          >
            <Select.Option value='Value 1'>Value 1</Select.Option>
            <Select.Option value='Value 2'>Value 2</Select.Option>
            <Select.Option value='Value 3'>Value 3</Select.Option>
          </Select>
          {role.map((role) => (
            <Row className='tw-gap-4 tw-items-center'>
              <p>{role}</p>
              <InputNumber
                min={1}
                max={24}
                defaultValue={1}
                onChange={handleNumberChange}
              />
            </Row>
          ))}
        </Col>
        <Col span={4}>
          <Checkbox.Group style={{ width: '100%' }}>
            <Col>
              {days.map((day) => (
                <Col span={8}>
                  <Checkbox value={day} className='tw-text-[16px]'>
                    {day}
                  </Checkbox>
                </Col>
              ))}
            </Col>
          </Checkbox.Group>
        </Col>
      </Row>

      <Row className='tw-justify-end tw-mt-4'>
        <Button>Save</Button>
      </Row>
      <Modal
        title='Confirm Deletion'
        open={modalVisible}
        onOk={(e) => handleDeleteRole(e)}
        onCancel={handleCancel}
        okText='Delete'
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete the shift?</p>
      </Modal>
    </Card>
  );
};

export default AddShiftCard;
