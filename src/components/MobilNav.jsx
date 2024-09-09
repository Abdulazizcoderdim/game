import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../constants';

const MobilNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="lg:hidden">
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map(item => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 ${
                isActive ? 'bg-gray-700' : ''
              } hover:bg-gray-700`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobilNav;
