import TagRole from '../customHooks/tagRole';
import StateBadge from '../customHooks/badgeState';

export const shiftData = {
  morning: {
    time: '08:00AM - 06:00PM',
    roles: [
      <TagRole role='Barista' pax={1} />,
      <TagRole role='Cashier' pax={1} />,
      <TagRole role='Waiter' pax={2} />,
    ],
    // 1st: all possible employees for shift
    // 2nd: all possible employees, but all pending
    // 3rd: all possible employees, randomly accepted/rejected
    // 4th: all possible employees, final availability 
    // 5th: final state
    states: [
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
        },
        { name: 'Nicholas', roles: [<TagRole role='Barista' />] },
        { name: 'Daniel', roles: [<TagRole role='Barista' />] },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
        },
        { name: 'Zheng Jie', roles: [<TagRole role='Waiter' />] },
        { name: 'Dave Lee', roles: [<TagRole role='Waiter' />] },
        { name: 'Jessica', roles: [<TagRole role='Cashier' />] },
        { name: 'Mei Li', roles: [<TagRole role='Cashier' />] },
      ],
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Nicholas',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Daniel',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Zheng Jie',
          roles: [<TagRole role='Waiter' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Dave Lee',
          roles: [<TagRole role='Waiter' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Jessica',
          roles: [<TagRole role='Cashier' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Mei Li',
          roles: [<TagRole role='Cashier' />],
          state: <StateBadge state='Pending' />,
        },
      ],
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
          state: <StateBadge state='Rejected' />,
        },
        {
          name: 'Nicholas',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Daniel',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Zheng Jie',
          roles: [<TagRole role='Waiter' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Dave Lee',
          roles: [<TagRole role='Waiter' />],
          state: <StateBadge state='Pending' />,
        },
        {
          name: 'Jessica',
          roles: [<TagRole role='Cashier' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Mei Li',
          roles: [<TagRole role='Cashier' />],
          state: <StateBadge state='Pending' />,
        },
      ],
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
          state: <StateBadge state='Rejected' />,
        },
        {
          name: 'Nicholas',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Daniel',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
          state: <StateBadge state='Rejected' />,
        },
        {
          name: 'Zheng Jie',
          roles: [<TagRole role='Waiter' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Dave Lee',
          roles: [<TagRole role='Waiter' />],
          state: <StateBadge state='Rejected' />,
        },
        {
          name: 'Jessica',
          roles: [<TagRole role='Cashier' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Mei Li',
          roles: [<TagRole role='Cashier' />],
          state: <StateBadge state='Rejected' />,
        },
      ],
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Daniel',
          roles: [<TagRole role='Barista' />],
          state: <StateBadge state='Accepted' />,
        },
        {
          name: 'Jessica',
          roles: [<TagRole role='Cashier' />],
          state: <StateBadge state='Accepted' />,
        },
      ],
    ],
  },
  afternoon: {
    time: '12:00PM - 10:00PM',
    roles: [
      <TagRole role='Cashier' pax={1} />,
      <TagRole role='Waiter' pax={1} />,
    ],
    states: [
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
        },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
        },
        { name: 'Zheng Jie', roles: [<TagRole role='Waiter' />] },
        { name: 'Dave Lee', roles: [<TagRole role='Waiter' />] },
        { name: 'Jessica', roles: [<TagRole role='Cashier' />] },
        { name: 'Mei Li', roles: [<TagRole role='Cashier' />] },
      ],
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
          state: <StateBadge state="Accepted" />,
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
          state: <StateBadge state="Accepted" />,
        },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
          state: <StateBadge state="Accepted" />,
        },
        { name: 'Zheng Jie', roles: [<TagRole role='Waiter' />], state: <StateBadge state="Rejected" /> },
        { name: 'Dave Lee', roles: [<TagRole role='Waiter' />], state: <StateBadge state="Accepted" /> },
        { name: 'Jessica', roles: [<TagRole role='Cashier' />], state: <StateBadge state="Accepted" /> },
        { name: 'Mei Li', roles: [<TagRole role='Cashier' />], state: <StateBadge state="Accepted" /> },
      ],
      [
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Cashier' />,
          ],
          state: <StateBadge state="Accepted" />,
        },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />],
          state: <StateBadge state="Accepted" />,
        },
      ],
    ],
  },
  full: {
    time: '11:00AM - 9:00PM',
    roles: [
      <TagRole role='Barista' pax={1} />,
      <TagRole role='Waiter' pax={1} />,
    ],
    states: [
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
        },
        { name: 'Nicholas', roles: [<TagRole role='Barista' />] },
        { name: 'Daniel', roles: [<TagRole role='Barista' />] },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
        },
        { name: 'Zheng Jie', roles: [<TagRole role='Waiter' />] },
        { name: 'Dave Lee', roles: [<TagRole role='Waiter' />] },
      ],
      [
        {
          name: 'Mike',
          roles: [<TagRole role='Barista' />, <TagRole role='Waiter' />],
          state: <StateBadge state="Accepted" />,
        },
        {
          name: 'Stacy',
          roles: [
            <TagRole role='Barista' />,
            <TagRole role='Cashier' />,
            <TagRole role='Waiter' />,
          ],
          state: <StateBadge state="Rejected" />,
        },
        { name: 'Nicholas', roles: [<TagRole role='Barista' />], state: <StateBadge state="Accepted" /> },
        { name: 'Daniel', roles: [<TagRole role='Barista' />], state: <StateBadge state="Rejected" /> },
        {
          name: 'Kai Wen',
          roles: [<TagRole role='Waiter' />, <TagRole role='Cashier' />],
          state: <StateBadge state="Rejected" />,
        },
        { name: 'Zheng Jie', roles: [<TagRole role='Waiter' />], state: <StateBadge state="Rejected" /> },
        { name: 'Dave Lee', roles: [<TagRole role='Waiter' />], state: <StateBadge state="Accepted" /> },
      ],
      [
        { name: 'Nicholas', roles: [<TagRole role='Barista' />], state: <StateBadge state="Accepted" /> },
        { name: 'Dave Lee', roles: [<TagRole role='Waiter' />], state: <StateBadge state="Accepted" /> },
      ],
    ],
  },
};
