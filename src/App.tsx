import { Routes, Route } from 'react-router-dom';
import Employees from './components/employees/employees';
import Dashboard from './components/dashboard';
import Settings from './components/settings/settings';
import Shifts from './components/shifts/shifts';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='/employees' element={<Employees />} />
        <Route path='/shifts' element={<Shifts />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
