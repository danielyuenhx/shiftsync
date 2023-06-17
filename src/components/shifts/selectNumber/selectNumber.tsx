import React from 'react';

import { Col, InputNumber, Row } from 'antd';

type selectNumberProps = {
  role: string;
  handleNumberChange: (role: string, e: any) => void;
};

const SelectNumber = (props: selectNumberProps) => {
  const handleNumberChange = (e: any) => {
    props.handleNumberChange(props.role, e);
  };

  return (
    <Row className='tw-gap-4 tw-items-center'>
      <Col span={5}>
        <p>{props.role}</p>
      </Col>
      <Col>
        <InputNumber
          min={1}
          max={25}
          defaultValue={1}
          onChange={handleNumberChange}
        />
      </Col>
    </Row>
  );
};

export default SelectNumber;
