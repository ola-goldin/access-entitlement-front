import React from 'react';
import classes from './form-components.module.css'
type InputProps<T extends string | number> = {
  label?: string;
  name: string;
  value: T | '';
  onChange: (value: T | '') => void;
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  className?: string;
};

export default function Input<T extends string | number>({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  className = '',
}: InputProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (type === 'number') {
      onChange(val === '' ? '' : (Number(val) as T));
    } else {
      onChange(val as T);
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`custom-input w-full px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${classes.customInput}`}
      />

    </div>
  );
}
