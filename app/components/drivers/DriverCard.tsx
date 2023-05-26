'use client';

import { DriverResponse } from '@/app/types/DriverTypes';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { GiRaceCar } from 'react-icons/gi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaWikipediaW } from 'react-icons/fa';

interface DriverCardProps {
    driver: DriverResponse;
    driversPerPage: number;
}

const DriverCard: React.FC<DriverCardProps> = ({ driver, driversPerPage }) => {
    return (
        <>
            <div className='flex flex-col items-start gap-5 border border-black rounded-xl p-5 cursor-pointer transition duration-500 hover:-translate-y-3 hover:bg-[#D72323] group w-full'>
                <h1 className='text-xl font-semibold text-black transition group-hover:text-white'>{driver.forename} {driver.surname}</h1>
                <div className='flex flex-row gap-2'>
                    <BiWorld size={24} className='group-hover:text-white' />
                    <span className='group-hover:text-white'>{driver.nationality}</span>
                </div>
                <hr className='w-full border-black' />
                <div className='flex flex-row gap-2'>
                    <AiOutlineFieldNumber size={24} className='group-hover:text-white' />
                    {
                        driver.number ? (
                            <span className='group-hover:text-white'>{driver.number}</span>
                        ) : (
                            <span className='group-hover:text-white'>No existe información</span>
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
                            <span className='group-hover:text-white'>No existe información</span>
                        )
                    }
                </div>
                <hr className='w-full border-black' />
                <div className='flex flex-row gap-2'>
                    <CiCalendarDate size={24} className='group-hover:text-white' />
                    {
                        driver.code ? (
                            <span className='group-hover:text-white'>{driver.dob?.toLocaleDateString()}</span>
                        ) : (
                            <span className='group-hover:text-white'>No existe información</span>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default DriverCard;