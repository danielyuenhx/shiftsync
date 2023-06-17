import {
  Input,
  Select,
  Typography,
  Table,
  Tag,
  Card,
  Button,
  Modal,
  Avatar,
  Row,
} from 'antd';
import {
  InfoCircleOutlined,
  EditOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { micah, personas, thumbs } from '@dicebear/collection';

interface ProfileProps {
  profile: {
    name: string;
    roles: Array<any>;
    hourly_rate: number;
    phone_number: string;
    // shift: string;
  };
}

const SelectedProfileCard = (props: ProfileProps | null) => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'day',
    },
    {
      title: 'Shift',
      dataIndex: 'shift',
      key: 'shift',
    },
    // {
    //   title: 'Availability',
    //   dataIndex: 'availability',
    //   key: 'availability',
    //   render: (availability: any) => (
    //     <Tag color={availability ? 'green' : 'red'}>
    //       {availability ? 'Yes' : 'No'}
    //     </Tag>
    //   ),
    // },
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

  const availabilityData = [
    {
      date: '2023-06-19',
      day: 'Monday',
      shift: 'Morning Shift',
    },
    {
      date: '2023-06-20',
      day: 'Tuesday',
      shift: 'Afternoon Shift',
    },
    {
      date: '2023-06-21',
      day: 'Wednesday',
      shift: 'Full-day',
    },
  ];

  const [edit, setEdit] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);

  const roleColour = (role: string) => {
    if (role === 'Cashier') {
      return 'gold';
    } else if (role === 'Waiter') {
      return 'red';
    } else if (role === 'Barista') {
      return 'blue';
    }
  };

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
      size='default'
      title={
        props?.profile && (
          <Row className='tw-items-center tw-gap-4 !tw-min-h-[75px]'>
            <Avatar
              size={36}
              icon={
                <img
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(
                    createAvatar(micah, {
                      seed: props?.profile?.name,
                    }).toString()
                  )}`}
                />
              }
            />
            <Typography.Title level={3} className='!tw-m-0'>
              {props?.profile?.name}
            </Typography.Title>
          </Row>
        )
      }
      extra={
        props?.profile && (
          <div className='tw-w-56 tw-flex tw-justify-between tw-flex-row'>
            <Button
              icon={<EditOutlined />}
              type='default'
              onClick={editHandler}
              className='tw-w-[100px] tw-text-black'
            >
              {edit ? 'Save' : 'Edit'}
            </Button>
            <Button
              icon={<UserDeleteOutlined />}
              onClick={deleteHandler}
              danger
              className='tw-w-[100px]'
            >
              Delete
            </Button>
          </div>
        )
      }
    >
      {props?.profile ? (
        <>
          <div className='tw-flex tw-flex-col tw-gap-2'>
            <div className='tw-mb-4'>
              <Typography.Title level={5}>Schedule</Typography.Title>
              <Table
                dataSource={availabilityData}
                columns={columns}
                pagination={false}
                showHeader={true}
              />
            </div>
            <div className='tw-flex tw-flex-col tw-mb-2'>
              <Typography.Title level={5}>Hourly rate (RM)</Typography.Title>
              {!edit ? (
                <p className='tw-text-[16px]'>{props.profile.hourly_rate}</p>
              ) : (
                <Input
                  id='rate'
                  placeholder='Rate'
                  value={props.profile.hourly_rate}
                  onChange={handleRateChange}
                  disabled={!edit}
                  className='tw-h-[35px]'
                />
              )}
            </div>
            <div className='tw-flex tw-flex-col tw-mb-2'>
              <Typography.Title level={5}>Phone Number</Typography.Title>
              {!edit ? (
                <p className='tw-text-[16px]'>{props.profile.phone_number}</p>
              ) : (
                <Input
                  id='phoneNumber'
                  placeholder='Phone Number'
                  value={props.profile.phone_number}
                  onChange={handlePhoneNumberChange}
                  disabled={!edit}
                  className='tw-h-[35px]'
                />
              )}
            </div>
            <div className='tw-flex tw-flex-col tw-mb-2'>
              <Typography.Title level={5}>Roles</Typography.Title>
              {!edit ? (
                <Row>
                  {props.profile.roles.map((role) => (
                    <Tag
                      key={role.name}
                      color={roleColour(role.name)}
                      className='tw-mb-1'
                    >
                      {role.name}
                    </Tag>
                  ))}
                </Row>
              ) : (
                <Select
                  id='values'
                  mode='multiple'
                  placeholder='Select roles'
                  value={props.profile.roles.map((role) => role.name)}
                  onChange={handleDropdownChange}
                  className='tw-h-[35px] tw-w-full'
                  disabled={!edit}
                >
                  {props.profile.roles.map((role) => (
                    <Select.Option value={role.name}>{role.name}</Select.Option>
                  ))}
                </Select>
              )}
            </div>
          </div>
          <Modal
            title='Confirm Deletion'
            open={modalVisible}
            onOk={(e) => handleDeleteRole(e)}
            onCancel={handleCancel}
            okText='Delete'
            okButtonProps={{ danger: true }}
          >
            <p>Are you sure you want to delete {props.profile.name}?</p>
          </Modal>
        </>
      ) : (
        <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-primary tw-p-10'>
          <InfoCircleOutlined className='tw-text-7xl tw-p-8' />
          <Typography className='tw-text-primary tw-text-2xl tw-font-semibold'>
            Click on a card to view a profile!
          </Typography>
        </div>
      )}
    </Card>
  );
};

export default SelectedProfileCard;
