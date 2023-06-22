import { Tag } from "antd";

type Role = "Cashier" | "Waiter" | "Barista";

const getRoleColour = (role: Role, pax: number) => {
  switch (role) {
    case "Cashier":
      return <Tag color="gold">Cashier x{pax}</Tag>;
    case "Waiter":
      return <Tag color="blue">Waiter x{pax}</Tag>;
    case "Barista":
      return <Tag color="red">Barista x{pax}</Tag>;
    default:
      return null;
  }
};

interface TagRoleProps {
  role: Role;
  pax: number;
}

const TagRole = (role: TagRoleProps) => {
  const tagComponent = getRoleColour(role.role, role.pax);

  return <div>{tagComponent}</div>;
};

export default TagRole;
