import React from 'react';
import { Link } from 'react-router-dom';
import { IBreadcrumb } from '../../interface';

const Breadcrumb: React.FC<IBreadcrumb> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-10">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < items.length - 1 ? (
              <Link to={item.href} className="text-sm text-[#175CFF] font-medium hover:text-[#175CFF]">
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-[#667185] font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-sm text-[#667185] font-medium">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
