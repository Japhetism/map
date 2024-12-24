import React, { useState, useEffect, useRef } from 'react';
import { IDropdown } from '../../interface';

const Dropdown: React.FC<IDropdown> = ({ classname = "w-48", buttonIcon, menuItems, onItemClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="flex items-center justify-center">
        {buttonIcon}
      </button>
      {dropdownOpen && (
        <div className={`absolute right-0 mt-2 p-4 ${classname} bg-white border border-gray-200 rounded-lg shadow-lg`}>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => onItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
