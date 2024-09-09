import React from 'react';

const MaxWidth = ({ children, className }) => {
  return (
    <div className={`xl:px-40 lg:px-30 sm:px-10 px-3 ${className}`}>{children}</div>
  );
};

export default MaxWidth;
