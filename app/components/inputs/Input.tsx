'use client';

import Button from '../buttons/Button';
import { FiSearch } from 'react-icons/fi';
interface InputProps {
    id: string;
    type: string;
    label: string;
    value: string;
    disabled?: boolean;
    onChange: (value: string | null) => void;
}

const Input: React.FC<InputProps> = ({ id, type, label, value, disabled, onChange }) => {
    return (
        <div className='w-full relative pt-5'>
            <FiSearch size={24} className='text-neutral-700 absolute top-10 left-2' />
            <input
                id={id}
                type={type}
                placeholder={label}
                onChange={onChange}
                value={value}
                className={`
                    w-full
                    p-3
                    pt-5
                    px-10
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                `}
                disabled={disabled}
            />

        </div>
    );
}

export default Input;

