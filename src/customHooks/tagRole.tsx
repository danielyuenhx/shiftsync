import { Tag } from "antd";

type Role = "Cashier" | "Waiter" | "Barista";

const getRoleColour = (role: Role, pax: number) => {
  switch (role) {
    case "Cashier":
      return <Tag color="gold">x{pax} Cashier</Tag>;
    case "Waiter":
      return <Tag color="blue">x{pax} Waiter</Tag>;
    case "Barista":
      return <Tag color="red">x{pax} Barista</Tag>;
    default:
      return null;
  }
};

interface TagRoleProps {
  role: Role;
  pax?: number;
}

const TagRole = (role: TagRoleProps) => {
  const tagComponent = getRoleColour(role.role, role.pax ? role.pax : 1);

  return <div>{tagComponent}</div>;
};

export default TagRole;
