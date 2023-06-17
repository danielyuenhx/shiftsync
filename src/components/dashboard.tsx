import { useLocation } from "react-router-dom";
import Employees from "./employees/employees";
import Calendar from "./calendar/calendar";
import Settings from "./settings/settings";
import LayoutWithSidebar from "./layoutWithSidebar";

const Dashboard = () => {
  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case "/employees":
        return <Employees />;

      case "/settings":
        return <Settings />;

      default:
        return <Calendar />;
    }
  };
  return <LayoutWithSidebar>{renderComponent()}</LayoutWithSidebar>;
};

export default Dashboard;
