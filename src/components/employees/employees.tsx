import { useState } from "react";
import ProfileCard from "../profileCard/profileCard";
import SelectedProfileCard from "../selectedProfileCard/selectedProfileCard";
import { profile } from "../../data/data";
import { Pagination } from "antd";

interface ProfileProps {
  name: string;
  role: Array<string>;
  hourlyRate: number;
  number: string;
}

const Employees = () => {
  const [selectedProfile, setSelectedProfile] = useState<any>();

  const handleProfileClick = (profile: ProfileProps) => {
    setSelectedProfile(profile);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const renderProfiles = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProfiles = profile.slice(startIndex, endIndex);

    return displayedProfiles.map((profile) => (
      <div
        key={profile.name}
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => handleProfileClick(profile)}
      >
        <ProfileCard profile={profile} />
      </div>
    ));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{
          width: "30%",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {renderProfiles()}
        <Pagination
          defaultCurrent={currentPage}
          total={profile.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
      <div style={{ width: "70%" }}>
        {selectedProfile && (
          <div style={{ width: "100%" }}>
            <SelectedProfileCard profile={selectedProfile} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;
