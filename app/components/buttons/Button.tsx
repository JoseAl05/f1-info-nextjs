'use client'

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    small?:boolean;
    backgroundColor?:boolean;
}

const Button:React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    small,
    backgroundColor,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className=
            {
                `
                relative
                p-3
                border
                border-black
                rounded-lg
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                hover:opacity-90
                ${small ? 'w-1/2' : ''}
                ${backgroundColor ? 'bg-[#D72323]' : 'bg-transparent'}
                ${backgroundColor ? 'font-bold' : 'font-semibold'}
                ${backgroundColor ? 'text-white' : 'text-black'}
                ${backgroundColor ? 'hover:border-white' : 'hover:border-black'}
                ${backgroundColor ? 'hover:bg-[#354d77]' : 'hover:bg-white'}
                `
            }
        >
            {label}
        </button>
    );
}

export default Button;