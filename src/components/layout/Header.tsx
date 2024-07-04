import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="bg-white  p-4">
      <div className="container mx-auto flex justify-center lg:justify-start items-center">
        <img src="/logo.jpg" alt="Amplify Research" className="h-16" />
      </div>
    </header>
  );
};

export default Header;
