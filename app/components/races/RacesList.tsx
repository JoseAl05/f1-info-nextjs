'use client'

import { RaceResponse } from '@/app/types/RaceTypes';
import RacesCard from './RacesCard';
import Pagination from '../pagination/Pagination';
import { usePathname } from 'next/navigation';

interface RacesListProps {
    races?: RaceResponse[];
    qRaces?: number;
}

const RacesList: React.FC<RacesListProps> = ({ races, qRaces }) => {

    const racesPerPage = 10;
    const pathname = usePathname();

    return (
        <>
            <div className='py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10'>
                {
                    races?.map((race) => {
                        return (
                            <RacesCard
                                key={race.raceId}
                                race={race}
                                racesPerPage={racesPerPage}
                            />
                        )
                    })
                }
            </div>
            <Pagination
                count={qRaces}
                dataPerPage={racesPerPage}
                currentPathname={pathname}
            />
        </>
    );
}

export default RacesList;