import { useState } from 'react';
import ProfileCard from './profileCard/profileCard';
import SelectedProfileCard from './selectedProfileCard/selectedProfileCard';
import { data } from '../../data/data';
import { Col, Pagination, Row } from 'antd';

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
          className="tw-w-full cursor-pointer"
          onClick={() => handleProfileClick(profile)}
        >
          <ProfileCard profile={profile} />
        </div>
      );
    });
  };

  return (
    <Row className='tw-gap-6'>
      <Col
        span={8}
        className='tw-flex tw-flex-col tw-gap-4 tw-items-center'
      >
        {renderProfiles()}
        <Pagination
          defaultCurrent={currentPage}
          total={data.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </Col>
      <Col span={15}>
        <SelectedProfileCard profile={selectedProfile} />
      </Col>
    </Row>
  );
};

export default Employees;
