import React from 'react';

interface OnClickLinkProps {
  url: string;
  children: React.ReactNode;
}

const OnClickLink: React.FC<OnClickLinkProps> = ({ url, children }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <span 
      onClick={handleClick} 
      className="border-b-2 border-blue-500 text-blue-500 hover:cursor-pointer"
    >
      {children}
    </span>
  );
};

export default OnClickLink;
