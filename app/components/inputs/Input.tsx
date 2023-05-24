'use client';

import Button from '../buttons/Button';
import { FiSearch } from 'react-icons/fi';
interface InputProps {
    id: string;
    type: string;
    label: string;
    value: string;
    onChange: (value: string | null) => void;
}

const Input: React.FC<InputProps> = ({ id, type, label, value, onChange }) => {
    return (
        <div className='w-full relative py-5'>
            <FiSearch size={24} className='text-neutral-700 absolute top-10 left-2' />
            <input
                id={id}
                type={type}
                placeholder=' '
                onChange={onChange}
                value={value}
                className={`
                    peer
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
            />
            <label className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-10
                    left-10
                    z-10
                    origin-[0]
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-5
                    peer-focus:text-neutral-400
                `}>
                {label}
            </label>

        </div>
    );
}

export default Input;

