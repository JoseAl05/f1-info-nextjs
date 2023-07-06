'use client';

import { useSearchParams } from 'next/navigation';
import { DriverResponse } from '@/app/types/DriverTypes';
import DriverCard from './DriverCard';
import Pagination from '../pagination/Pagination';
import { drivers } from '@prisma/client';
import EmptyState from '../emptyState/EmptyState';
import { BiSad } from 'react-icons/bi';

interface DriverListProps {
    drivers: drivers[];
    qDrivers: number;
}

const DriverList: React.FC<DriverListProps> = ({ drivers, qDrivers }) => {

    const params = useSearchParams();

    //@ts-ignore
    const driversPerPage = params.get('dataPerPage') ? parseInt(params.get('dataPerPage')) : 12;

    return (
        <>
            {
                drivers.length === 0 && (
                    <div className='flex flex-col gap-5 items-center justify-center mx-auto'>
                        <BiSad size={30} />
                        No se econtrarón pilotos. Intente nuevos filtros.
                    </div>
                )
            }
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-10'>
                {
                    drivers.length !== 0 && (
                        drivers.map((driver) => {
                            return (
                                <DriverCard
                                    key={driver.driverId}
                                    driver={driver}
                                    driversPerPage={driversPerPage}
                                />
                            )
                        })
                    )
                }
            </div>
            <Pagination
                count={qDrivers}
                dataPerPage={driversPerPage}
                currentPathname='/drivers'
            />
        </>
    );
}

export default DriverList;