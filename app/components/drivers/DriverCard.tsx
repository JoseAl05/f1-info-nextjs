'use client';

import { DriverResponse } from '@/app/types/DriverTypes';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { GiRaceCar } from 'react-icons/gi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaWikipediaW } from 'react-icons/fa';

import useImage from '@/app/hooks/useImage';
import Image from 'next/image';
import DriverImage from './DriverImage';
import { useRouter } from 'next/navigation';
import EmptyState from '../emptyState/EmptyState';
import { drivers } from '@prisma/client';

interface DriverCardProps {
    driver: drivers;
    driversPerPage: number;
}

const DriverCard: React.FC<DriverCardProps> = ({ driver, driversPerPage }) => {

    const router = useRouter();

    return (
        <>
            <div
                onClick={() => router.push(`/drivers/${driver.driverId}/${driver.forename}-${driver.surname}`)}
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
                <h1 className='text-xl font-semibold text-black transition group-hover:text-white'>{driver.forename} {driver.surname}</h1>
                <div className='flex flex-row gap-2'>
                    <BiWorld size={24} className='group-hover:text-white' />
                    <span className='group-hover:text-white'>{driver.nationality}</span>
                </div>
                <DriverImage
                    driver={driver}
                    grayscale
                />
                <hr className='w-full border-black' />
                <div className='flex flex-row gap-2'>
                    <AiOutlineFieldNumber size={24} className='group-hover:text-white' />
                    {
                        driver.number ? (
                            <span className='group-hover:text-white'>{driver.number}</span>
                        ) : (
                            <EmptyState />
                        )
                    }
                </div>
                <hr className='w-full border-black' />
                <div className='flex flex-row gap-2'>
                    <GiRaceCar size={24} className='group-hover:text-white' />
                    {
                        driver.code ? (
                            <span className='group-hover:text-white'>{driver.code}</span>
                        ) : (
                            <EmptyState />
                        )
                    }
                </div>
                <hr className='w-full border-black' />
                <div className='flex flex-row gap-2'>
                    <CiCalendarDate size={24} className='group-hover:text-white' />
                    {
                        driver.dob ? (
                            <span className='group-hover:text-white'>{driver.dob?.toLocaleDateString()}</span>
                        ) : (
                            <EmptyState />
                        )
                    }
                </div>
                <span className='invisible group-hover:visible group-hover:mx-auto group-hover:font-bold group-hover:text-xl group-hover:text-white'>Ver más</span>
            </div>
        </>
    );
}

export default DriverCard;