import {
  Input,
  Select,
  Typography,
  Table,
  Tag,
  Card,
  Button,
  Modal,
  Divider
} from 'antd';
import {
  InfoCircleOutlined,
  EditOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

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
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
  },
  {
    title: 'Availability',
    dataIndex: 'availability',
    key: 'availability',
    render: (availability: any) => (
      <Tag color={availability ? 'green' : 'red'}>
        {availability ? 'Yes' : 'No'}
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

const SelectedProfileCard = (props: ProfileProps | null) => {
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
        props?.profile && (
          <Typography.Title className='tw-mt-4' level={3}>
            {props?.profile?.name}
          </Typography.Title>
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
                //dataSource={props?.profile?.shift}
                columns={columns}
                pagination={false}
                showHeader={true}
              />
            </div>
            <div className='tw-flex tw-flex-col tw-mb-2'>
              
              <Typography.Title level={5}>Hourly rate (RM)</Typography.Title>
              {!edit ? (
                <p className="tw-text-[16px]">{props?.profile?.hourlyRate}</p>
              ) : (
                <Input
                  id='rate'
                  placeholder='Rate'
                  value={props?.profile?.hourlyRate}
                  onChange={handleRateChange}
                  disabled={!edit}
                  className='tw-h-[35px]'
                />
              )}
            </div>
            <div className='tw-flex tw-flex-col tw-mb-2'>
              <Typography.Title level={5}>Phone Number</Typography.Title>
              {!edit ? (
                <p className="tw-text-[16px]">{props?.profile?.number}</p>
              ) : (
                <Input
                  id='phoneNumber'
                  placeholder='Phone Number'
                  value={props?.profile?.number}
                  onChange={handlePhoneNumberChange}
                  disabled={!edit}
                  className='tw-h-[35px]'
                />
              )}
            </div>
            <div className='tw-flex tw-flex-col tw-mb-2'>
              <Typography.Title level={5}>Roles</Typography.Title>
              {!edit ? (
                <p className="tw-text-[16px]">{props?.profile?.role}</p>
              ) : (
                <Select
                  id='values'
                  mode='multiple'
                  placeholder='Select roles'
                  value={props?.profile?.role}
                  onChange={handleDropdownChange}
                  className='tw-h-[35px] tw-w-full'
                  disabled={!edit}
                >
                  <Select.Option value='Value 1'>Value 1</Select.Option>
                  <Select.Option value='Value 2'>Value 2</Select.Option>
                  <Select.Option value='Value 3'>Value 3</Select.Option>
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
            <p>Are you sure you want to delete {props?.profile?.name}?</p>
          </Modal>
        </>
      ) : (
        <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-primary tw-p-10'>
          <InfoCircleOutlined className='tw-text-7xl tw-p-8' />
          <Typography className='tw-text-primary tw-text-2xl tw-font-bold'>
            Click on a card to view a profile!
          </Typography>
        </div>
      )}
    </Card>
  );
};

export default SelectedProfileCard;
