'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import SeasonCard from './SeasonCard';
import Pagination from '../pagination/Pagination';
import Button from '../buttons/Button';
import { SeasonResponse } from '@/app/types/SeasonTypes';
import { seasons } from '@prisma/client';

interface SeasonListProps {
    seasons:seasons[];
    qSeasons:number;
}

const SeasonsList:React.FC<SeasonListProps> = ({seasons,qSeasons}) => {

    const params = useSearchParams();
    const router = useRouter();
    //@ts-ignore
    const seasonsPerPage = params.get('dataPerPage') ? parseInt(params.get('dataPerPage')) : 12;


    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-10'>
                {seasons.map((season) => {
                    return (
                        <SeasonCard
                            key={season.year}
                            season={season}
                            seasonPerPage={seasonsPerPage}
                        />
                    )
                })}
            </div>
            <Pagination
                count={qSeasons}
                dataPerPage={seasonsPerPage}
                currentPathname='/seasons'
            />
        </>
    );
}

export default SeasonsList;