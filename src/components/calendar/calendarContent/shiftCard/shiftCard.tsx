import {
  Button,
  Card,
  Col,
  Row,
  Table,
  Typography,
  Steps,
  InputNumber,
  Select,
  Badge,
} from 'antd';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import Notification from '../../../../customHooks/notification';
import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { updateState } from '../../../../redux/slices/demoSlice';
import PriorityModal from '../priorityModal/priorityModal';
import { sendCalendarShifts } from '../../../../components/utils/api';

const ShiftCard = (props: any) => {
  const {
    state,
    title,
    step,
    stepError,
    buttonText,
    showButton,
    columns,
    tableData,
  } = props;
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const {
    name,
    roles,
    time,
    possible,
    allPending,
    somePending,
    final,
    chosen,
    replace,
  } = tableData;

  const [count, setCount] = useState(25);
  let timer: number;

  // If the state changes, set timer to move to another state
  useEffect(() => {
    if (state === 'PENDING') {
      // this interval got memory leak lol
      timer = setInterval(function () {
        setCount((prev) => prev - 1);
      }, 1000);

      const Timeout = setTimeout(() => {
        dispatch(updateState('SOMEPENDING'));
      }, 10000);

      return () => {
        clearTimeout(Timeout);
      };
    }

    if (state === 'SOMEPENDING') {
      const Timeout = setTimeout(() => {
        dispatch(updateState('FINAL'));
      }, 5000);
      return () => {
        clearTimeout(Timeout);
      };
    }

    if (state === 'FINAL') {
      const Timeout = setTimeout(() => {
        dispatch(updateState('ALGORITHM'));
      }, 10000);
      return () => {
        clearTimeout(Timeout);
      };
    }

    if (state === 'ALGORITHM') {
      const Timeout = setTimeout(() => {
        dispatch(updateState('APPROVAL'));
      }, 5000);
      return () => {
        clearTimeout(Timeout);
      };
    }

    if (state === "COMPLETED") {
      const Timeout = setTimeout(() => {
        dispatch(updateState("REJECTED"));
      }, 10000);
      return () => {
        clearTimeout(Timeout);
      };
    }

    return () => {
      clearInterval(timer);
    };

    // if (state === "COMPLETED") {
    //   const Timeout = setTimeout(() => {
    //     dispatch(updateState("REJECTED"));
    //   }, 10000);
    //   return () => {
    //     clearTimeout(Timeout);
    //   };
    // }
  }, [state]);

  useEffect(() => {
    if (count === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const demoFlow = async (dispatch: any, state: string) => {
    switch (state) {
      case 'START':
        return setShowModal(true);
      case 'APPROVAL':
        await sendCalendarShifts();
        return dispatch(updateState('COMPLETED'));
    }
  };

  // Button function
  const buttonHandler = () => {
    setShowNotification(true);
    demoFlow(dispatch, state);
  };

  // Function to render data
  const renderTableData = () => {
    switch (state) {
      case 'START':
        return possible;
      case 'REQUEST':
        return allPending;
      case 'PENDING':
        return allPending;
      case 'SOMEPENDING':
        return somePending;
      case 'FINAL':
        return final;
      case 'APPROVAL':
        return chosen;
      case 'COMPLETED':
        return chosen;
      case "REJECTED":
        return replace;

      default:
        break;
    }
  };

  const omegaData = renderTableData();

  const selectAfter = (
    <Select defaultValue='Seconds'>
      <Select.Option value='Seconds'>Seconds</Select.Option>
      <Select.Option value='Minutes'>Minutes</Select.Option>
      <Select.Option value='Hours'>Hours</Select.Option>
      <Select.Option value='Days'>Days</Select.Option>
    </Select>
  );

  return (
    <>
      <Row className='tw-p-4 tw-mb-2 tw-border-gray-600'>
        <Steps
          current={step}
          status={stepError}
          size='small'
          items={[
            {
              title: 'Request availabilities',
              // description: step === 0 ? 'Request availabilities' : '',
            },
            {
              title: 'Pending replies',
              icon: step === 1 ? <LoadingOutlined /> : null,
              subTitle:
                step === 1 && count <= 0
                  ? 'Scheduling...'
                  : step === 1
                  ? `00:00:${('0' + count).slice(-2)}`
                  : null,
            },
            {
              // title: 'Awaiting approval',
              title: step === 3 ? 'Schedule approved!' : 'Awaiting approval',
            },
          ]}
        />
      </Row>
      <Badge.Ribbon text={time}>
        <Card
          className='tw-h-[525px]'
          title={
            <Row className='tw-items-center !tw-min-h-[60px]'>
              <Typography.Title level={3} className='!tw-m-0 !tw-mr-6'>
                {name} Shift
              </Typography.Title>
              <Row>{roles}</Row>
            </Row>
          }
        >
          <PriorityModal
            state={state}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Notification
            type={state}
            trigger={showNotification}
            setShowNotification={setShowNotification}
          />

          {/* Employees */}
          <Typography.Title level={5}>{title}</Typography.Title>

          {state === 'ALGORITHM' ? (
            <div className='tw-text-center tw-h-[25rem] tw-flex tw-flex-col tw-justify-center tw-item-center'>
              <Player
                src={
                  'https://assets10.lottiefiles.com/packages/lf20_vyL7gxqRAH.json'
                }
                className='player'
                loop
                autoplay
                speed={2}
                style={{
                  width: '35%',
                }}
              />

              <Typography className='tw-font-medium'>
                Calculating the optimal schedule for your employees...
              </Typography>
            </div>
          ) : (
            <div style={{ maxHeight: '395px', overflowY: 'scroll' }}>
              <Table
                dataSource={omegaData}
                columns={columns}
                pagination={false}
              />
            </div>
          )}
        </Card>

        <div
          className={`tw-flex tw-gap-4 ${
            state === 'START' ? 'tw-justify-between' : 'tw-justify-end'
          } tw-mt-4`}
        >
          {state === 'START' && (
            <Row className='tw-gap-4 tw-items-center tw-justify-center'>
              <Typography.Title className='!tw-mb-0' level={5}>
                End after:
              </Typography.Title>
              <InputNumber addonAfter={selectAfter} defaultValue={25} />
            </Row>
          )}
          {showButton && (
            <Button type='default' onClick={buttonHandler}>
              {buttonText}
            </Button>
          )}
        </div>
      </Badge.Ribbon>
    </>
  );
};

export default ShiftCard;
