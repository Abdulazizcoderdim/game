import React from 'react';

const MaxWidth = ({ children, className }) => {
  return (
    <div className={`lg:px-40 sm:px-20 px-10 ${className}`}>{children}</div>
  );
};

export default MaxWidth;
