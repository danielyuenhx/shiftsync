import AddEmployeeCard from "./addEmployeeCard/addEmployeeCard";
import AddRoleCard from "./addRoleCard/addRoleCard";

const Settings = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-6">
      <AddEmployeeCard />
      <AddRoleCard />
    </div>
  );
};

export default Settings;
