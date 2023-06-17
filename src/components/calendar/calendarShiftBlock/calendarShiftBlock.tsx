import React from 'react';

type props = {
  blockIndex: number;
  startTime: number;
  endTime: number;
  colour: string;
  shiftName: string;
};

const CalendarShiftBlock = ({
  blockIndex,
  startTime,
  endTime,
  colour,
  shiftName,
}: props) => {
  const heightPerHour = 41.25;
  const blockWidth = 52;
  const skipWidth = 64;

  return (
    <div
      // TODO: Add onClick
      style={{
        position: 'absolute',
        height: `${heightPerHour * (endTime - startTime)}px`,
        width: blockWidth,
        top: '28px',
        marginTop: `${heightPerHour * startTime}px`,
        left: '96px',
        marginLeft: `${blockIndex * skipWidth}px`,
        backgroundColor: `${colour}`,
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      <p
        style={{
          position: 'absolute',
          bottom: 0,
          transformOrigin: 'bottom left',
          rotate: '-90deg',
          width: `${(heightPerHour * (endTime - startTime)) - 10}px`,
          transform: `translate(5px, ${blockWidth-5}px)`,
          fontWeight: 500,
        }}
      >
        {shiftName}
      </p>
    </div>
  );
};

export default CalendarShiftBlock;
