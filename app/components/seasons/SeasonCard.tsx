'use client'

import { SeasonData } from '@/app/types/SeasonTypes';

interface SeasonCardProps {
    season: SeasonData;
    seasonPerPage: number;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ season, seasonPerPage }) => {
    return (
        <>
            <div className='flex flex-col justify-between items-center gap-8 w-full border border-black rounded-xl p-10'>
                    <h1 className='text-xl font-semibold text-black'>Temporada de {season.season}</h1>
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