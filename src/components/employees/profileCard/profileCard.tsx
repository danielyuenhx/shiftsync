import { Avatar, Card, Col, Row, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface ProfileProps {
  profile: {
    name: string;
    role: Array<string>;
    hourlyRate: number;
    number: string;
  };
}

const ProfileCard = (props: ProfileProps) => {
  const roleColour = (role: string) => {
    if (role === 'Cashier') {
      return 'gold';
    } else if (role === 'Waiter') {
      return 'red';
    } else if (role === 'Barista') {
      return 'blue';
    }
  };

  return (
    <Card hoverable bodyStyle={{ padding: '24px' }} className='tw-h-auto'>
      <Row>
        <Col
          span={10}
          className='tw-flex tw-flex-col tw-justify-center tw-items-center'
        >
          <Avatar size={48} icon={<UserOutlined />} className='tw-mb-3' />
          <h3 className='tw-text-[16px] tw-text-black tw-font-bold'>
            {props?.profile?.name}
          </h3>
          <p className='tw-text-[14px] tw-text-gray-500'>
            {props?.profile?.number}
          </p>
        </Col>
        <Col span={14} className='tw-p-3'>
          <p className='tw-font-medium'>Hourly rate:</p>
          <p className='tw-text-[14px] tw-color-[#888888] tw-mb-2'>
            RM{props?.profile?.hourlyRate}/hr
          </p>
          <p className='tw-font-medium'>Roles:</p>
          <div>
            {props?.profile?.role.map((role) => (
              <Tag key={role} color={roleColour(role)}>
                {role}
              </Tag>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCard;
