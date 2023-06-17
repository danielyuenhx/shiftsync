import React from 'react';

import { Col, Row, Table } from 'antd';
import AddShiftCard from './addShiftCard/addShiftCard';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { shiftDetails } from '../../redux/slices/shiftSlice';
import { useAppSelector } from '../../redux/hooks/hooks';

const Shifts = () => {
  const shiftColumns = [
    { title: 'ID', key: 'id' },
    { title: 'Shift Name', key: 'name' },
    { title: 'Start Time', key: 'start_time' },
    { title: 'End Time', key: 'end_time' },
    { title: 'Roles', key: 'roles' },
  ];
  const dayColumns = [
    { title: 'Sunday', key: 'sunday' },
    { title: 'Monday', key: 'monday' },
    { title: 'Tuesday', key: 'tuesday' },
    { title: 'Wednesday', key: 'wednesday' },
    { title: 'Thursday', key: 'thursday' },
    { title: 'Friday', key: 'friday' },
    { title: 'Saturday', key: 'saturday' },
  ];

  const checkComponent = (
    <div className='tw-text-center'>
      <CheckCircleTwoTone twoToneColor='#52c41a' />
    </div>
  );

  let shifts = useAppSelector(shiftDetails);

  shifts = shifts.map((shift: any) => ({
    ...shift,
    name: <div className="tw-font-semibold">{shift.name}</div>,
    roles: shift.shift_role
      .map(
        (role: any) =>
          `${role.number_of_employees} ${role.roles.name}${
            role.number_of_employees > 1 ? 's' : ''
          }`
      )
      .join(', '),
    sunday: shift.sunday && checkComponent,
    monday: shift.monday && checkComponent,
    tuesday: shift.tuesday && checkComponent,
    wednesday: shift.wednesday && checkComponent,
    thursday: shift.thursday && checkComponent,
    friday: shift.friday && checkComponent,
    saturday: shift.saturday && checkComponent,
  }));

  return (
    <Row className='tw-gap-6'>
      <Col span={24}>
        <AddShiftCard />
      </Col>
      <Col span={24}>
        <Table bordered size='middle' dataSource={shifts}>
          {shiftColumns.map((col) => (
            <Column title={col.title} dataIndex={col.key} key={col.key} />
          ))}
          <ColumnGroup title='Days'>
            {dayColumns.map((col) => (
              <Column title={col.title} dataIndex={col.key} key={col.key} />
            ))}
          </ColumnGroup>
        </Table>
      </Col>
    </Row>
  );
};

export default Shifts;
