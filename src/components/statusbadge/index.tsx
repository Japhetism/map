import React from 'react';
import { IStatusBadge } from '../../interface';
import { getStatusBadgeStyles } from '../../utils/helper';

const StatusBadge: React.FC<IStatusBadge> = ({ status }) => {
  const badgeStyles = getStatusBadgeStyles(status)

  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeStyles}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;
