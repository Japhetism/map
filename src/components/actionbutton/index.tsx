import React from 'react';
import { IActionButton } from '../../interface';

const ActionButton: React.FC<IActionButton> = ({ title, classname, rightIcon: RightIcon, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`flex items-center space-x-2 px-4 py-2 text-[sm] text-white rounded-[12px] ${classname} hover:${classname}`}
    >
      {RightIcon && <RightIcon color='#FFF' width={14} height={14} />}
      <span>{title}</span>
    </button>
  );
}

export default ActionButton;
