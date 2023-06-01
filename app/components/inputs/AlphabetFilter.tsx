'use client';

interface AlphaberFilterProps {
    onClick: (value: string) => void;
    selected?: boolean;
    label: string;
    disabled?:boolean;
}

const AlphabetFilter: React.FC<AlphaberFilterProps> = ({ onClick, selected, label,disabled }) => {
    return (
        <>
            {
                !disabled ? (
                    <div
                        onClick={() => onClick(label)}
                        className={`
                                w-full
                                rounded-xl
                                border-2
                                p-4
                                cursor-pointer
                                transition
                                hover:border-[#D72323]
                                ${selected ? 'border-[#D72323]' : 'border-neutral-200'}
                            `}
                    >
                        <p className='font-semibold'>
                            {label}
                        </p>
                    </div>

                ):(
                    <div
                        className='
                                w-full
                                rounded-xl
                                border-2
                                p-4
                                cursor-not-allowed
                            '
                    >
                        <p className='font-semibold'>
                            {label}
                        </p>
                    </div>
                )
            }
        </>
    );
}

export default AlphabetFilter;