import React from 'react';
import { ILabelValue } from '../../interface';

const LabelValue: React.FC<ILabelValue> = ({ label, value }) => {
  const statusClass = "text-#F56630"
  return (
    <div className="flex items-center space-x-10 space-y-4">
      <span className="font-medium text-[#555E68] text-base w-[256px]">{label}:</span>
      <span className="font-medium text-[#344054] text-base flex-1 truncate">{value}</span>
    </div>
  );
};

export default LabelValue;
