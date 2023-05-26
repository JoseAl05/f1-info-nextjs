'use client'

import { SeasonResponse } from '@/app/types/SeasonTypes';
import { useRouter } from 'next/navigation';

interface SeasonCardProps {
    season: SeasonResponse;
    seasonPerPage: number;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ season, seasonPerPage }) => {

    const router = useRouter();

    return (
        <>
            <div className='
                flex
                flex-col
                justify-between
                items-center
                gap-8
                w-full
                border
                border-black
                rounded-xl
                p-10
                cursor-pointer
                transition
                hover:scale-110
                hover:bg-[#D72323]
                group
                '
                onClick={(e) => {
                    router.push(`/seasons/${season.year}?page=0`)
                    e.preventDefault();
                }}
            >
                    <h1 className='text-xl font-semibold text-black transition group-hover:text-white'>Temporada de {season.year}</h1>
                    <a
                        href={season.url}
                        className='
                            p-2
                            text-lg
                            font-light
                            text-black
                            text-center
                            bg-transparent
                            border
                            border-black
                            rounded-lg
                            transition
                            hover:bg-red-500
                            hover:scale-105
                            group-hover:text-white
                        '
                        target='_blank'
                        rel='noreferrer'
                    >
                        Más Información
                    </a>
            </div>
        </>
    );
}

export default SeasonCard;