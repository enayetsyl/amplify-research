import React from 'react';
import { FaEdit, FaTrash, FaSave, FaPlus, FaLock, FaBell, FaUserEdit } from 'react-icons/fa';
import Button from './button';

const App: React.FC = () => {
  return (
    <div className="p-4">
      <Button text="Create Account" variant="filled" color="primary-orange" />
      <Button icon={<FaEdit />} text="Edit Profile" variant="filled" color="dark-blue" />
      <Button icon={<FaLock />} text="Change Password" variant="filled" color="deep-blue" />
      <Button icon={<FaTrash />} text="Delete My Account" variant="filled" color="red" />
      <Button icon={<FaSave />} text="Save" variant="filled" color="blue" />
      <Button text="Cancel" variant="outline" color="blue" />
      <Button text="Save" variant="outline" color="deep-blue" />
      <Button icon={<FaPlus />} text="Add New Project" variant="filled" color="dark-blue" />
      <Button icon={<FaPlus />} text="Add New" variant="filled" color="ash" />
      <Button icon={<FaUserEdit />} text="Edit" variant="filled" color="gray" />
      <Button icon={<FaTrash />} text="Delete" variant="filled" color="red" />
      <Button icon={<FaBell />} variant="filled" color="blue" />
      <Button icon={<FaBell />} variant="outline" color="dark-blue" />
      <Button text="Join" variant="filled" color="blue" />
      <Button text="Start" variant="filled" color="blue" />
    </div>
  );
};

export default App;
