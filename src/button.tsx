import React from 'react';

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  variant?: 'filled' | 'outline';
  color?: 'primary-orange' | 'blue' | 'deep-blue' | 'dark-blue' | 'blackish-blue' | 'red' | 'ash' | 'gray';
  onClick?: () => void;
}

const colorClasses = {
  'primary-orange': 'bg-primary-orange text-white border-primary-orange',
  'blue': 'bg-blue text-white border-blue',
  'deep-blue': 'bg-deep-blue text-white border-deep-blue',
  'dark-blue': 'bg-dark-blue text-white border-dark-blue',
  'blackish-blue': 'bg-blackish-blue text-white border-blackish-blue',
  'red': 'bg-red text-white border-red',
  'ash': 'bg-ash text-white border-ash',
  'gray': 'bg-gray text-white border-gray',
};

const outlineClasses = {
  'primary-orange': 'text-primary-orange border-primary-orange',
  'blue': 'text-blue border-blue',
  'deep-blue': 'text-deep-blue border-deep-blue',
  'dark-blue': 'text-dark-blue border-dark-blue',
  'blackish-blue': 'text-blackish-blue border-blackish-blue',
  'red': 'text-red border-red',
  'ash': 'text-ash border-ash',
  'gray': 'text-gray border-gray',
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = 'filled',
  color = 'primary-orange',
  onClick,
}) => {
  const filledStyle = colorClasses[color];
  const outlineStyle = outlineClasses[color];

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded ${
        variant === 'filled' ? filledStyle : outlineStyle
      } ${variant === 'outline' && 'bg-transparent border-2'} 
      hover:opacity-75 transition-opacity duration-300`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
