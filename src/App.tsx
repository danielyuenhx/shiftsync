import { Routes, Route } from "react-router-dom";
import Employees from "./components/employees/employees";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings/settings";
import Shifts from "./components/shifts/shifts";
import { useEffect } from "react";
import { getShifts } from "./redux/slices/shiftSlice";
import { useAppDispatch } from "./redux/hooks/hooks";
import { getEmployees } from "./redux/slices/employeeSlice";
import { getRoles } from "./redux/slices/roleSlice";
import { updateShift, updateState } from "./redux/slices/demoSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getShifts(dispatch);
    getEmployees(dispatch);
    getRoles(dispatch);
    dispatch(updateShift("MORNING"));
    dispatch(updateState("START"));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/shifts" element={<Shifts />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
