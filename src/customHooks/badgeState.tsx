import { Badge } from "antd";

type State = "Pending" | "Accepted" | "Rejected";

const getStateBadge = (state: State) => {
  switch (state) {
    case "Pending":
      return <Badge status="warning" text="Pending" />;
    case "Accepted":
      return <Badge status="success" text="Accepted" />;
    case "Rejected":
      return <Badge status="error" text="Rejected" />;
    default:
      return null;
  }
};

interface StateBadgeProps {
  state: State;
}

const StateBadge = (state: StateBadgeProps) => {
  const badgeComponent = getStateBadge(state.state);

  return <div>{badgeComponent}</div>;
};

export default StateBadge;
