import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import registerImage from '../../public/register.jpg'

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row bg-white   overflow-hidden">
          <div className="w-full lg:w-1/2 p-8">
            <div className="text-center">
              
              <h2 className="text-2xl font-bold text-blackish-blue mb-4">REGISTER</h2>
            </div>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 p-3 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 p-3 border border-gray-300 rounded mt-4 md:mt-0"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-primary-orange focus:ring-primary-orange border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="#" className="text-blue">Terms & Conditions</a>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-blue">Privacy Policy</a>.
              </p>
              <button
                type="submit"
                className="w-full py-3 bg-primary-orange text-white rounded hover:bg-orange-700 transition-colors"
              >
                Create Account
              </button>
              <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account? <a href="#" className="text-blue">Login</a>
              </p>
            </form>
          </div>
          <div className="hidden lg:block lg:w-1/2 bg-[#F7F8FA] p-8">
            <img src={registerImage} alt="Placeholder" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
