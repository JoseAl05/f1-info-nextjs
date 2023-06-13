'use client'

import { SeasonResponse } from '@/app/types/SeasonTypes';
import { useRouter } from 'next/navigation';
import SeasonImage from './SeasonImage';

interface SeasonCardProps {
    season: SeasonResponse;
    seasonPerPage: number;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ season, seasonPerPage }) => {

    const router = useRouter();

    return (
        <div className='
                flex
                flex-col
                items-start
                gap-5
                border
                border-black
                rounded-xl
                p-5
                cursor-pointer
                transition
                duration-500
                hover:-translate-y-3
                hover:bg-[#D72323]
                group
                w-full
            '
            onClick={(e) => {
                router.push(`/seasons/${season.year}?page=0`)
                e.preventDefault();
            }}
        >
            <h1 className='text-xl font-semibold text-black transition group-hover:text-white'>Temporada de {season.year}</h1>
            <SeasonImage
                seasonYear={season.year}
            />
            <span className='invisible group-hover:visible group-hover:mx-auto group-hover:font-bold group-hover:text-xl group-hover:text-white'>Ver más</span>
        </div>
    );
}

export default SeasonCard;