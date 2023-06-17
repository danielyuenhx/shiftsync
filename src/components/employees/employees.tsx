import { useState } from 'react';
import ProfileCard from './profileCard/profileCard';
import SelectedProfileCard from './selectedProfileCard/selectedProfileCard';
import { Col, Pagination, Row } from 'antd';
import { useAppSelector } from '../../redux/hooks/hooks';
import { employeeDetails } from '../../redux/slices/employeeSlice';

interface ProfileProps {
  name: string;
  role: Array<string>;
  hourlyRate: number;
  number: string;
}

const Employees = () => {
  const employees = useAppSelector(employeeDetails);

  const [selectedProfile, setSelectedProfile] = useState(employees[0]);

  const handleProfileClick = (profile: ProfileProps) => {
    setSelectedProfile(profile);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const renderProfiles = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProfiles = employees.slice(startIndex, endIndex);
    console.log(displayedProfiles);

    return displayedProfiles.map((profile: any) => {
      return (
        <div
          key={profile.id}
          className='tw-w-full cursor-pointer'
          onClick={() => handleProfileClick(profile)}
        >
          <ProfileCard profile={profile} />
        </div>
      );
    });
  };

  return (
    <Row className='tw-gap-6'>
      <Col span={8} className='tw-flex tw-flex-col tw-gap-4 tw-items-center'>
        {renderProfiles()}
        <Pagination
          defaultCurrent={currentPage}
          total={employees.length}
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
