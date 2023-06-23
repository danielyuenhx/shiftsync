import { Col, Divider, Row } from 'antd';
import { time, shiftData as data } from '../../../data/data';
import CalendarShiftBlock from '../calendarShiftBlock/calendarShiftBlock';
import ShiftCard from './shiftCard/shiftCard';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { stateData, shiftData } from '../../../redux/slices/demoSlice';
import { renderStateData } from '../../../customHooks/renderStateData';
import { columnsWithState, columnsWithoutState } from '../../../data/newData';
import { omegaData } from '../../../data/shifts';

const CalendarContent = () => {
  // Data from redux
  const state = useAppSelector(stateData);
  const shift = useAppSelector(shiftData);

  // Getting data from each state
  const { title, step, stepError, buttonText, showButton } =
    renderStateData(state);

  // Getting table structure
  const renderTableStructure = (state: any) => {
    switch (state) {
      case 'PENDING':
        return columnsWithState;
      case 'SOMEPENDING':
        return columnsWithState;
      case 'FINAL':
        return columnsWithState;
      default:
        return columnsWithoutState;
    }
  };

  const columns = renderTableStructure(state);

  // Roles
  const morning = omegaData.morning.name;
  const afternoon = omegaData.afternoon.name;
  const fullDay = omegaData.full.name;

  // Roles
  const morningRoles = omegaData.morning.roles;
  const afternoonRoles = omegaData.afternoon.roles;
  const fullDayRoles = omegaData.full.roles;

  // Time
  const morningTime = omegaData.morning.time;
  const afternoonTime = omegaData.afternoon.time;
  const fullDayTime = omegaData.full.time;

  // Morning
  const allPossibleMorning = omegaData.morning.states[0];
  const allPendingMorning = omegaData.morning.states[1];
  const somePendingMorning = omegaData.morning.states[2];
  const finalMorning = omegaData.morning.states[3];
  const chosenMorning = omegaData.morning.states[4];

  // Afternoon
  const allPossibleAfternoon = omegaData.afternoon.states[0];
  const finalAfternoon = omegaData.afternoon.states[1];
  const chosenAfternoon = omegaData.afternoon.states[2];

  // Full-Day
  const allPossibleFull = omegaData.full.states[0];
  const finalFull = omegaData.full.states[1];
  const chosenFull = omegaData.full.states[2];

  const renderTableData = () => {
    switch (shift) {
      case 'MORNING':
        return {
          name: morning,
          roles: morningRoles,
          time: morningTime,
          possible: allPossibleMorning,
          allPending: allPendingMorning,
          somePending: somePendingMorning,
          final: finalMorning,
          chosen: chosenMorning,
        };

      case 'AFTERNOON':
        return {
          name: afternoon,
          roles: afternoonRoles,
          time: afternoonTime,
          possible: allPossibleAfternoon,
          final: finalAfternoon,
          chosen: chosenAfternoon,
        };

      case 'FULL-DAY':
        return {
          name: fullDay,
          roles: fullDayRoles,
          time: fullDayTime,
          possible: allPossibleFull,
          final: finalFull,
          chosen: chosenFull,
        };

      default:
        break;
    }
  };

  const tableData = renderTableData();

  return (
    <Row className='tw-w-full tw-justify-around tw-align-top tw-mt-4'>
      <Col span={8}>
        <div className='tw-p-2 tw-border-gray-400 tw-border-[1px] tw-border-opacity-20 tw-rounded-xl tw-relative'>
          <div className='tw-max-h-[625px] tw-overflow-y-scroll tw-pr-4 tw-relative'>
            {data.map((shift, index) => (
              <CalendarShiftBlock
                blockIndex={index}
                startTime={shift.startTime}
                endTime={shift.endTime}
                colour={shift.colour}
                shiftName={shift.title}
                shift={shift.shift}
              />
            ))}
            {time.map((time) => (
              <Divider
                orientation='left'
                className='!tw-text-xs !tw-font-normal !tw-mt-7 !tw-mb-7 !tw-text-gray-500'
              >
                {time}
              </Divider>
            ))}
          </div>
        </div>
      </Col>
      <Col span={15}>
        <ShiftCard
          state={state}
          buttonText={buttonText}
          title={title}
          step={step}
          stepError={stepError}
          showButton={showButton}
          columns={columns}
          shift={shift}
          tableData={tableData}
        />
      </Col>
    </Row>
  );
};

export default CalendarContent;
