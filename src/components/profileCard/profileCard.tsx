import { Card, Tag } from 'antd';

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
    <Card
      hoverable
      bodyStyle={{ padding: '16px' }}
      style={{ minWidth: '210px', height: 'auto' }}
    >
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>
          {props?.profile?.name}
        </h3>
        <p style={{ fontSize: '14px', color: '#888888', marginBottom: '8px' }}>
          Hourly Rate: ${props?.profile?.hourlyRate}
        </p>
        <p style={{ fontSize: '14px', color: '#888888', marginBottom: '16px' }}>
          {props?.profile?.number}
        </p>
        <div>
          {props?.profile?.role.map((role) => (
            <Tag key={role} color={roleColour(role)}>
              {role}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
