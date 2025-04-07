import React from 'react';
import classes from './form-components.module.css';

type DropdownOption<T extends string | number> = {
  label: string;
  value: T;
};

type DropdownProps<T extends string | number> = {
  label?: string;
  name: string;
  value: T | '';
  onChange: (value: T | '') => void;
  options: DropdownOption<T>[];
  className?: string;
  placeholder?: string;
};

export default function SimpleDropdown<T extends string | number>({
  label,
  name,
  value,
  onChange,
  options,
  className = '',
  placeholder = 'Select an option',
}: DropdownProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    onChange(val === '' ? '' : (val as T));
  };

  return (
    <div
      className={`mb-4 ${label ? classes.selectWrapperWL : classes.selectWrapper }`}
    >
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={`custom-input w-full px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${classes.customInput}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
