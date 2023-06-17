import { useState } from 'react';
import {
  Typography,
  Button,
  Card,
  TimePicker,
  Modal,
  Row,
  Col,
  Input,
  Select,
  Checkbox,
  notification,
} from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { roleDetails } from '../../../redux/slices/roleSlice';
import SelectNumber from '../selectNumber/selectNumber';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { createShifts } from '../../../redux/slices/shiftSlice';

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

  const roles = useAppSelector(roleDetails);

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

  const [selectedRoles, setSelectedRoles] = useState([]);
  const handleRoleChange = (e: any) => {
    setSelectedRoles(e);
  };

  const [roleNumber, setRoleNumber] = useState<{ [key: string]: string }>({});
  const handleNumberChange = (role: string, e: any) => {
    const newRoleNumber: any = {};
    newRoleNumber[role] = e;
    setRoleNumber((prev) => ({ ...prev, ...newRoleNumber }));
  };

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < days.length);
    setCheckAll(list.length === days.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? days : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const [api, contextHolder] = notification.useNotification();

  const openSuccessNotification = () => {
    api.success({
      message: 'Successfully added Shift!',
      description:
        'Shift added to the database. Check it out in the Schedule tab.',
      placement: 'bottomRight',
    });
  };

  const dispatch = useAppDispatch();
  const handleAddShift = async () => {
    const sunday = checkedList.includes('Sunday');
    const monday = checkedList.includes('Monday');
    const tuesday = checkedList.includes('Tuesday');
    const wednesday = checkedList.includes('Wednesday');
    const thursday = checkedList.includes('Thursday');
    const friday = checkedList.includes('Friday');
    const saturday = checkedList.includes('Saturday');

    const rolesToBeAdded = Object.keys(roleNumber).map((roleName: string) => {
      const roleId = roles.find((role: any) => role.name === roleName).id;
      return { id: roleId, noOfEmployees: roleNumber[roleName] };
    });

    await createShifts(dispatch, {
      name,
      startTime,
      endTime,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      roles: rolesToBeAdded,
    });

    setName('');
    setCheckedList([]);
    setIndeterminate(false);
    setCheckAll(false);
    setRoleNumber({});

    openSuccessNotification();
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
      {contextHolder}
      <Row className='tw-gap-20 tw-text-xl'>
        <Col span={10} className='tw-gap-5 tw-flex tw-flex-col'>
          <Input
            id='name'
            placeholder='Shift Name'
            value={name}
            onChange={handleNameChange}
          />
          <TimePicker.RangePicker
            minuteStep={5}
            showSecond={false}
            className='tw-w-full'
            onChange={handleTimeChange}
            format='HH:mm:ss'
          />
          <Select
            id='values'
            mode='multiple'
            placeholder='Select roles'
            onChange={handleRoleChange}
            className='tw-h-[35px] tw-w-full'
          >
            {roles.map((role: any) => (
              <Select.Option value={role.name}>{role.name}</Select.Option>
            ))}
          </Select>
        </Col>
        <Col span={4}>
          <Typography.Title level={5}>Roles</Typography.Title>
          {selectedRoles.length ? (
            <Col className='tw-gap-2 tw-flex tw-flex-col'>
              {selectedRoles.map((role) => (
                <SelectNumber
                  role={role}
                  handleNumberChange={handleNumberChange}
                />
              ))}
            </Col>
          ) : (
            <Typography.Text className='tw-text-gray-500'>
              Select a role first!
            </Typography.Text>
          )}
        </Col>
        <Col span={4}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            All days
          </Checkbox>
          <Checkbox.Group
            style={{ width: '100%' }}
            value={checkedList}
            onChange={onChange}
          >
            <Col>
              {days.map((day) => (
                <Col span={8}>
                  <Checkbox value={day}>{day}</Checkbox>
                </Col>
              ))}
            </Col>
          </Checkbox.Group>
        </Col>
      </Row>

      <Row className='tw-justify-end tw-bottom-0'>
        <Button
          type='primary'
          className='tw-bg-primary'
          onClick={handleAddShift}
          disabled={
            !name ||
            !startTime ||
            !endTime ||
            !selectedRoles.length ||
            !checkedList.length
          }
        >
          Add
        </Button>
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
