'use client';

import { DriverResponse } from '@/app/types/DriverTypes';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { GiRaceCar } from 'react-icons/gi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaWikipediaW } from 'react-icons/fa';
import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import ConstructorImage from './ConstructorImage';
import { useRouter } from 'next/navigation';
import { constructors } from '@prisma/client';

interface ConstructorCardProps {
    team: constructors;
    constructorsPerPage: number;
}

const ConstructorCard: React.FC<ConstructorCardProps> = ({ team, constructorsPerPage }) => {

    const router = useRouter();

    return (
        <>
            <div
                onClick={() => router.push(`/constructors/${team.constructorId}/${team.name}`)}
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
                    w-full
                '
            >
                <h1 className='text-xl font-semibold text-black transition group-hover:text-white'>{team.name}</h1>
                <hr className='w-full border-black' />
                <div className='flex flex-row gap-2'>
                    <BiWorld size={24} className='group-hover:text-white' />
                    <span className='group-hover:text-white'>{team.nationality}</span>
                </div>
                <ConstructorImage
                    team={team}
                />
                <span className='invisible group-hover:visible group-hover:mx-auto group-hover:font-bold group-hover:text-xl group-hover:text-white'>Ver resultados</span>
            </div>
        </>
    );
}

export default ConstructorCard;