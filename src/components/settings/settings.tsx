import AddEmployeeCard from "../addEmployeeCard/addEmployeeCard";
import AddRoleCard from "../addRoleCard/addRoleCard";
import AddShiftCard from "../addShiftCard/addShiftCard";

const Settings = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-6">
      <AddEmployeeCard />
      <AddRoleCard />
      <AddShiftCard />
    </div>
  );
};

export default Settings;
