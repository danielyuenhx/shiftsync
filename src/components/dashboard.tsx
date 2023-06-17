import { useLocation } from "react-router-dom";
import Employees from "./employees/employees";
import Calendar from "./calendar/calendar";
import Settings from "./settings/settings";
import LayoutWithSidebar from "./layoutWithSidebar";
import Shifts from "./shifts/shifts";


const Dashboard = () => {
  const location = useLocation();
  
  

  const renderComponent = () => {
    switch (location.pathname) {
      case "/employees":
        return <Employees />;
      case "/shifts":
        return <Shifts />;
      case "/settings":
        return <Settings />;
      default:
        return <Calendar />;
    }
  };
  return <LayoutWithSidebar>{renderComponent()}</LayoutWithSidebar>;
};

export default Dashboard;
