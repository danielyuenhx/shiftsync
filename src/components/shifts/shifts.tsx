import React from 'react';

import { Card, Col, Row, Table } from 'antd';
import AddShiftCard from './addShiftCard/addShiftCard';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import { CheckCircleTwoTone } from '@ant-design/icons';

const Shifts = () => {
  const shiftColumns = [
    { title: 'Shift Name', key: 'name' },
    { title: 'Start Time', key: 'startTime' },
    { title: 'End Time', key: 'endTime' },
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

  const data = [
    {
      key: '1',
      name: 'Morning Shift',
      startTime: '0800',
      endTime: '1400',
      roles: ['Cashier', 'Barista', 'Waiter'],
      monday: (
        <div className='tw-text-center'>
          <CheckCircleTwoTone twoToneColor='#52c41a' />
        </div>
      ),
      tuesday: (
        <div className='tw-text-center'>
          <CheckCircleTwoTone twoToneColor='#52c41a' />
        </div>
      ),
      wednesday: (
        <div className='tw-text-center'>
          <CheckCircleTwoTone twoToneColor='#52c41a' />
        </div>
      ),
      thursday: (
        <div className='tw-text-center'>
          <CheckCircleTwoTone twoToneColor='#52c41a' />
        </div>
      ),
    },
    {
      key: '1',
      name: 'Morning Shift',
      startTime: '0800',
      endTime: '1400',
      roles: ['Cashier', 'Barista', 'Waiter'],
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <AddShiftCard />
      </Col>
      <Col span={24}>
        <Table
          bordered
          size='middle'
          dataSource={data}
        >
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
