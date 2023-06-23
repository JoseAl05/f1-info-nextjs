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
    backgroundColor,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className=
            {
                `
                text-sm
                relative
                p-3
                bg-white
                border
                border-black
                rounded-lg
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                hover:bg-red-600
                hover:text-white
                lg:text-xl
                `
            }
        >
            {label}
        </button>
    );
}

export default Button;