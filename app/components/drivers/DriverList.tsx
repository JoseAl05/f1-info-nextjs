'use client';

import { useSearchParams } from 'next/navigation';
import { DriverResponse } from '@/app/types/DriverTypes';
import DriverCard from './DriverCard';
import Pagination from '../pagination/Pagination';

interface DriverListProps {
    drivers?: DriverResponse[];
    qDrivers?: number;
}

const DriverList: React.FC<DriverListProps> = ({ drivers, qDrivers }) => {

    const params = useSearchParams();

    const driversPerPage = params.get('dataPerPage') ? parseInt(params.get('dataPerPage')) : 12;

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-10'>
                {drivers?.map((driver) => {
                    return (
                        <DriverCard
                            key={driver.driverId}
                            driver={driver}
                            driversPerPage={driversPerPage}
                        />
                    )
                })}
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