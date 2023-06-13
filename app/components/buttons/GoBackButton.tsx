'use client'

import { useRouter } from 'next/navigation';

interface GoBackButtonProps {
    pathname: string;
    label: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ pathname, label }) => {

    const router = useRouter();

    return (
        <button
            onClick={() => router.push(`${pathname}?page=0`)}
            className='
                text-sm
                text-white
                relative
                p-3
                mt-10
                border
                border-black
                rounded-lg
                bg-[#D72323]
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                hover:opacity-90
                '
        >
            Vovler a {label}
        </button>
    );
}

export default GoBackButton;