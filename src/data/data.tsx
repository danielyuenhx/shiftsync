import { Badge, Tag } from "antd";
import useTagColor from "../customHooks/tagColor";

export const data = [
  {
    name: "John Doess",
    role: ["Cashier", "Barista", "Waiter"],
    hourlyRate: 60,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: ["Morning", "Afternoon", "Full-day"],
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Morning",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Afternoon",
      },
    ],
  },
  {
    name: "John Doe",
    role: ["Cashier"],
    hourlyRate: 50,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: "Noon",
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Noon",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Noon",
      },
      {
        key: "5",
        day: "Friday",
        availability: false,
        time: "-",
      },
      {
        key: "6",
        day: "Saturday",
        availability: true,
        time: "Noon",
      },
      {
        key: "7",
        day: "Sunday",
        availability: false,
        time: "-",
      },
    ],
  },
  {
    name: "John Do",
    role: ["Cashier", "Barista", "Waiter"],
    hourlyRate: 60,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: ["Morning", "Afternoon", "Full-day"],
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Morning",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Afternoon",
      },
    ],
  },
  {
    name: "John D",
    role: ["Cashier"],
    hourlyRate: 50,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: "Noon",
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Noon",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Noon",
      },
      {
        key: "5",
        day: "Friday",
        availability: false,
        time: "-",
      },
      {
        key: "6",
        day: "Saturday",
        availability: true,
        time: "Noon",
      },
      {
        key: "7",
        day: "Sunday",
        availability: false,
        time: "-",
      },
    ],
  },
  {
    name: "Joh Doe",
    role: ["Cashier", "Barista", "Waiter"],
    hourlyRate: 60,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: ["Morning", "Afternoon", "Full-day"],
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Morning",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Afternoon",
      },
    ],
  },
  {
    name: "Jos Doe",
    role: ["Cashier"],
    hourlyRate: 50,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: "Noon",
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Noon",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Noon",
      },
      {
        key: "5",
        day: "Friday",
        availability: false,
        time: "-",
      },
      {
        key: "6",
        day: "Saturday",
        availability: true,
        time: "Noon",
      },
      {
        key: "7",
        day: "Sunday",
        availability: false,
        time: "-",
      },
    ],
  },
  {
    name: "John Doe",
    role: ["Cashier", "Barista", "Waiter"],
    hourlyRate: 60,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: ["Morning", "Afternoon", "Full-day"],
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Morning",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Afternoon",
      },
    ],
  },
  {
    name: "John Doe",
    role: ["Cashier"],
    hourlyRate: 50,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: "Noon",
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Noon",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Noon",
      },
      {
        key: "5",
        day: "Friday",
        availability: false,
        time: "-",
      },
      {
        key: "6",
        day: "Saturday",
        availability: true,
        time: "Noon",
      },
      {
        key: "7",
        day: "Sunday",
        availability: false,
        time: "-",
      },
    ],
  },
  {
    name: "John Doe",
    role: ["Cashier", "Barista", "Waiter"],
    hourlyRate: 60,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: ["Morning", "Afternoon", "Full-day"],
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Morning",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Afternoon",
      },
    ],
  },
  {
    name: "John Doe",
    role: ["Cashier"],
    hourlyRate: 50,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: "Noon",
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Noon",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Noon",
      },
      {
        key: "5",
        day: "Friday",
        availability: false,
        time: "-",
      },
      {
        key: "6",
        day: "Saturday",
        availability: true,
        time: "Noon",
      },
      {
        key: "7",
        day: "Sunday",
        availability: false,
        time: "-",
      },
    ],
  },
  {
    name: "John Doe",
    role: ["Cashier", "Barista", "Waiter"],
    hourlyRate: 60,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: ["Morning", "Afternoon", "Full-day"],
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Morning",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Afternoon",
      },
    ],
  },
  {
    name: "John Doe",
    role: ["Cashier"],
    hourlyRate: 50,
    number: "012-0122342",
    shift: [
      {
        key: "1",
        day: "Monday",
        availability: true,
        time: "Noon",
      },
      {
        key: "2",
        day: "Tuesday",
        availability: false,
        time: "-",
      },
      {
        key: "3",
        day: "Wednesday",
        availability: true,
        time: "Noon",
      },
      {
        key: "4",
        day: "Thursday",
        availability: true,
        time: "Noon",
      },
      {
        key: "5",
        day: "Friday",
        availability: false,
        time: "-",
      },
      {
        key: "6",
        day: "Saturday",
        availability: true,
        time: "Noon",
      },
      {
        key: "7",
        day: "Sunday",
        availability: false,
        time: "-",
      },
    ],
  },
];

export const time = [
  "12am",
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
];

export const shiftData = [
  {
    title: "Morning Shift",
    shift: "MORNING",
    startTime: 8,
    endTime: 18,
    colour: "#ff6961",
    shiftId: 2,
  },
  {
    title: "Afternoon Shift",
    shift: "AFTERNOON",
    startTime: 12,
    endTime: 22,
    colour: "#8be1e7",
    shiftId: 3,
  },
  {
    title: "Full-day",
    shift: "FULL-DAY",
    startTime: 8,
    endTime: 22,
    colour: "#fcecb2",
    shiftId: 4,
  },
];

export const roleData = [
  {
    title: "2 Baristas",
    color: "gold",
  },
  {
    title: "2 Waiters",
    color: "blue",
  },
  {
    title: "2 Cashiers",
    color: "green",
  },
];

export const dataTable = [
  { name: "John Doe", role: "Barista", approvalState: "Pending" },
  { name: "Jane Smith", role: "Waiter", approvalState: "Test" },
  { name: "Bob Johnson", role: "Barista", approvalState: "Rejected" },
  { name: "Jason Doe", role: "Cashier", approvalState: "Pending" },
  { name: "Mary Jane", role: "Waiter", approvalState: "Approved" },
  { name: "Johnson Mike", role: "Cashier", approvalState: "Rejected" },
];

export const employeeForDemo = [];

export const states = [
  {
    state: "Request",
    date: "2023-06-19",
    logs: [
      {
        label: "2023-06-19",
        children: "Manager requested for schedule from employees",
      },
    ],
    // employee: [
    //   {
    //     name: "John Doe",
    //     role: "Barista",
    //     approvalState: <Badge status="warning" text="Pending" />,
    //   },
    //   {
    //     name: "Jane Smith",
    //     role: "Waiter",
    //     approvalState: <Badge status="warning" text="Pending" />,
    //   },
    //   {
    //     name: "Bob Johnson",
    //     role: "Barista",
    //     approvalState: <Badge status="warning" text="Pending" />,
    //   },
    //   {
    //     name: "Jason Doe",
    //     role: "Cashier",
    //     approvalState: <Badge status="warning" text="Pending" />,
    //   },
    //   {
    //     name: "Mary Jane",
    //     role: "Waiter",
    //     approvalState: <Badge status="warning" text="Pending" />,
    //   },
    //   {
    //     name: "Johnson Mike",
    //     role: "Cashier",
    //     approvalState: <Badge status="warning" text="Pending" />,
    //   },
    // ],
  },
  {
    state: "Pending",
    date: "2023-06-20",
    logs: [
      {
        label: "2023-06-20",
        children: "Manager requested for schedule from employees",
      },
      {
        label: "2023-06-20",
        children: "Jason submitted his schedule",
      },
      {
        children: "Jack submitted his schedule",
      },
      {
        children: "Rachel submitted his schedule",
      },
      {
        children: "Mason submitted his schedule",
      },
    ],
    employee: [
      {
        name: "John Doe",
        role: "Barista",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Jane Smith",
        role: "Waiter",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Bob Johnson",
        role: "Barista",
        approvalState: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Jason Doe",
        role: "Cashier",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Mary Jane",
        role: "Waiter",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Johnson Mike",
        role: "Cashier",
        approvalState: <Badge status="success" text="Approved" />,
      },
    ],
  },
  {
    state: "Ready",
    date: "2023-06-21",
    logs: [
      {
        label: "2023-06-19",
        children: "Manager requested for schedule from employees",
      },
      {
        label: "2023-06-20",
        children: "Jason submitted his schedule",
      },
      {
        children: "Jack submitted his schedule",
      },
      {
        children: "Rachel submitted his schedule",
      },
      {
        children: "Mason submitted his schedule",
      },
      {
        label: "2023-06-21",
        children: "All employees submitted",
      },
      {
        label: "2023-06-21",
        children: "Manager approved schedule and schedule released",
      },
    ],
    employee: [
      {
        name: "John Doe",
        role: "Barista",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Jane Smith",
        role: "Waiters",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Bob Johnson",
        role: "Barista",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Jason Doe",
        role: "Cashiers",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Mary Jane",
        role: "Waiters",
        approvalState: <Badge status="success" text="Approved" />,
      },
      {
        name: "Johnson Mike",
        role: "Cashiers",
        approvalState: <Badge status="success" text="Approved" />,
      },
    ],
  },
];

// FOR FINAL DEMO
export const tableData = [
  {
    state: "Request",
    timeline: [
      { children: "Request availability", color: "gray" },
      { children: "Replies from employee", color: "gray" },
      { children: "Schedule approved", color: "gray" },
    ],
    roles: ["3 Barista", "2 Cashiers", "3 Waiters"],
    shiftId: 1,
    shift: "2023/06/25",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
    ],
    employee: [
      {
        name: "Mike",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
      },
      {
        name: "Stacy",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
      },
      {
        name: "Nicholas",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
      },
      {
        name: "Daniel",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
      },
      {
        name: "Kai Wen",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
      },
      {
        name: "Zheng Jie",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
      },
      {
        name: "Dave Lee",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
      },

      {
        name: "Jessica",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
      },
      {
        name: "Mei Li",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
      },
    ],
  },
  {
    state: "Requested",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "gray" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 2,
    roles: ["1 Barista", "1 Cashiers", "2 Waiters"],
    shift: "Morning Shift (10am to 6pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Stacy",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Kai Wen",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Jessica",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Zheng Jie",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
    ],
  },
  {
    state: "Requested",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "gray" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 3,
    roles: ["2 Barista", "1 Cashiers", "2 Waiters"],
    shift: "Afternoon Shift (12pm to 10pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "John Doe",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Jane Smith",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Jane Smith",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Jason Doe",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Mary Jane",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
    ],
  },
  {
    state: "Requested",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "gray" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 4,
    roles: ["2 Barista", "1 Cashiers", "2 Waiters"],
    shift: "Full-Day (10am to 10pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "John Doe",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Jane Smith",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Jason Doe",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
      {
        name: "Mary Jane",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
    ],
  },
  {
    state: "Requested",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "green" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 5,
    roles: ["1 Barista", "1 Cashiers", "2 Waiters"],
    shift: "Morning Shift (10am to 6pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Stacy",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Kai Wen",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Jessica",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Zheng Jie",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="warning" text="Pending" />,
      },
    ],
  },
  {
    state: "Pending",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "green" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 2,
    roles: ["1 Barista", "1 Cashiers", "2 Waiters"],
    shift: "Morning Shift (10am to 6pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Stacy",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Kai Wen",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Jessica",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Zheng Jie",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
    ],
  },
  {
    state: "Pending",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "green" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 3,
    roles: ["1 Barista", "1 Cashiers", "1 Waiters"],
    shift: "Afternoon Shift (12pm to 10pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Daniel",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Dave Lee",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Mei Li",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
    ],
  },
  {
    state: "Pending",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replacement needed", color: "red" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 4,
    roles: ["1 Barista", "1 Waiters"],
    shift: "Full-Day (10am to 10pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Jason",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Nicholas",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="error" text="Rejected" />,
      },
    ],
  },
  {
    state: "Pending",
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "green" },
      { children: "Schedule approved", color: "gray" },
    ],
    shiftId: 5,
    roles: ["1 Barista", "1 Waiters"],
    shift: "Full-Day (10am to 10pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Jason",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Mike",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
    ],
  },

  {
    state: "Approved",
    shiftId: 2,
    roles: ["1 Barista", "1 Cashiers", "2 Waiters"],
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "green" },
      { children: "Schedule approved", color: "green" },
    ],
    shift: "Morning Shift (10am to 6pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "John Doe",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Jane Smith",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Jason Doe",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Mary Jane",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
    ],
  },
  {
    state: "Approved",
    shiftId: 3,
    roles: ["1 Barista", "1 Cashiers", "2 Waiters"],
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "green" },
      { children: "Schedule approved", color: "green" },
    ],
    shift: "Afternoon Shift (12pm to 10pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Daniel",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Dave Lee",
        role: <Tag color={useTagColor("Cashier")}>Cashier</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Mei Li",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
    ],
  },
  {
    state: "Approved",
    shiftId: 4,
    roles: ["1 Barista", "1 Waiters"],
    timeline: [
      { children: "Request availability", color: "green" },
      { children: "Replies from employee", color: "green" },
      { children: "Schedule approved", color: "green" },
    ],
    shift: "Full-Day (10am to 10pm)",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ],
    employee: [
      {
        name: "Jason",
        role: <Tag color={useTagColor("Waiter")}>Waiter</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
      {
        name: "Mike",
        role: <Tag color={useTagColor("Barista")}>Barista</Tag>,
        state: <Badge status="success" text="Approved" />,
      },
    ],
  },
];
