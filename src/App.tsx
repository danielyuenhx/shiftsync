import { Routes, Route } from "react-router-dom";
import Employees from "./components/employees/employees";
import Dashboard from "./components/dashboard/dashboard";
import Settings from "./components/settings/settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
