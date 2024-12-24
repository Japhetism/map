import React, { useState } from 'react';
import SearchInput from '../searchInput';
import Dropdown from '../dropdown';
import { ArrowleftSVG } from '../../assets/icons/arrowleft';
import { BellSVG } from '../../assets/icons/bell';
import { OutlinechatSVG } from '../../assets/icons/outlinechat';
import UserFemale from '../../assets/images/userFemale.png';
import { ArrowdownSVG } from '../../assets/icons/arrowdown';
import { chats, notifications, profileMenu } from '../../fixtures/dropdown';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleDropdownItemClick = (item: string) => {
    console.log(item);
  };

  return (
    <header className="bg-white p-4 flex items-center justify-between border-b-[1px] border-[#F0F2F5]">
      <button
        onClick={handleBackClick}
        className="flex flex-row items-center justify-center space-x-4"
      >
        <ArrowleftSVG />
        <span className="text-[#667185] text-sm font-medium">Back</span>
      </button>

      <div className="flex-end flex flex-row items-center space-x-5 mx-4">
        <SearchInput
          placeholder="Search here..."
          searchQuery={searchQuery}
          classname="w-[450px]"
          onSearchChange={handleSearchChange}
        />
        
        <Dropdown
          buttonIcon={<BellSVG />}
          menuItems={notifications}
          onItemClick={handleDropdownItemClick}
          classname="w-72"
        />

        <Dropdown
          buttonIcon={<OutlinechatSVG />}
          menuItems={chats}
          onItemClick={handleDropdownItemClick}
          classname='w-56'
        />

        <Dropdown
          buttonIcon={
            <div className="flex flex-row items-center space-x-2">
              <img
                src={UserFemale}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <ArrowdownSVG color="#667185" />
            </div>
          }
          menuItems={profileMenu}
          onItemClick={handleDropdownItemClick}
        />
      </div>
    </header>
  );
};

export default Header;
