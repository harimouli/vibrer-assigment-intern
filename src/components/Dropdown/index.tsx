
import React from 'react';
import './index.css';

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: string[]; 
}

const Dropdown: React.FC<DropdownProps> = ({ options , ...props }) => {
    return (
        <select className="dropdown-element" {...props}>
            {options.map((option, index) => (
                <option className="option-element" key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
