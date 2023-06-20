'use client';

import { RaceResponse } from '@/app/types/RaceTypes';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineWatchLater } from 'react-icons/md';
import { GiRaceCar } from 'react-icons/gi';
import { useRouter } from 'next/navigation';
import { races } from '@prisma/client';

interface RacesCardProps {
    race: races;
    racesPerPage: number;
    year?: string;
}

const RacesCard: React.FC<RacesCardProps> = ({ race, racesPerPage, year }) => {

    const router = useRouter();

    const formattedRaceName = race.name.split(' ').join('-')

    const yearParam = year ? year : race.year;

    return (
        <>
            <div
                onClick={() => { router.push(`/race/${yearParam}/${race.raceId}/${formattedRaceName}`)}}
                className='
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
                '
            >
                <h1 className='text-xl font-semibold text-black group-hover:text-white'>{race.name}</h1>
                <div className='flex flex-row gap-2'>
                    <AiOutlineFieldNumber size={24} className='group-hover:text-white' />
                    <span className='group-hover:text-white'>{race.round}</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <CiCalendarDate size={24} className='group-hover:text-white' />
                    <span className='group-hover:text-white'>{race.date?.toDateString()}</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <MdOutlineWatchLater size={24} className='group-hover:text-white' />
                    {
                        race.time ? (
                            <span className='group-hover:text-white'>{race.time?.toTimeString()}</span>
                        ) : (
                            <span className='group-hover:text-white'>No existe informacion!</span>
                        )
                    }
                </div>
                <div className='flex flex-row gap-2'>
                    <GiRaceCar size={24} className='group-hover:text-white' />
                    <span className='group-hover:text-white'>{race.name}</span>
                </div>
                <span className='invisible group-hover:visible group-hover:mx-auto group-hover:font-bold group-hover:text-xl group-hover:text-white'>Ver resultados</span>
            </div>
        </>
    );
}

export default RacesCard;