import { useState } from 'react';
import ProfileCard from '../profileCard/profileCard';
import SelectedProfileCard from '../selectedProfileCard/selectedProfileCard';
import { data } from '../../data/data';
import { Pagination } from 'antd';

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
    const displayedProfiles = data.slice(startIndex, endIndex);

    return displayedProfiles.map((profile: any) => {
      return (
        <div
          // key={profile.name}
          style={{ width: '100%', cursor: 'pointer' }}
          onClick={() => handleProfileClick(profile)}
        >
          <ProfileCard profile={profile} />
        </div>
      );
    });
  };

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <div
        style={{
          width: '30%',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {renderProfiles()}
        <Pagination
          defaultCurrent={currentPage}
          total={data.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
      <div style={{ width: '70%' }}>
        <SelectedProfileCard profile={selectedProfile} />
      </div>
    </div>
  );
};

export default Employees;
