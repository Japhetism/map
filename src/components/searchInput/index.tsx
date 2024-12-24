import React from 'react';
import SearchSVG from '../../assets/icons/search';
import { ISearchInput } from '../../interface';

const SearchInput: React.FC<ISearchInput> = ({ placeholder, classname, searchQuery, onSearchChange }) => {
  return (
    <div className={`relative ${classname}`}>
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <SearchSVG />
      </div>
      <input
        type="search"
        defaultValue={searchQuery}
        onChange={onSearchChange}
        placeholder={placeholder}
        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchInput;
