import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white py-4">
      <div className=" px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center ">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@amplifyresearch.com</span>
            </div>
          </div>
        <div className='flex justify-center items-center mt-4 lg:mt-0 lg:ml-'>
        <div className="flex items-center space-x-2 border-l-2 pl-3">
              <FaPhone />
              <span>925 236 9700</span>
            </div>
          <div className="flex space-x-4  ml-4">
            <a href="#" className="hover:underline border-l-2 px-3 border-r-2">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
