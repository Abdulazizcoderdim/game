import React from 'react';

const MaxWidth = ({ children, className }) => {
  return (
    <div className={`xl:px-40 lg:px-30 sm:px-20 px-10 ${className}`}>{children}</div>
  );
};

export default MaxWidth;
