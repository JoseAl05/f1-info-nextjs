'use client'

import useSeason from '@/app/hooks/useSeason';
import { useRouter, useSearchParams } from 'next/navigation';
import SeasonCard from './SeasonCard';
import Pagination from '../pagination/Pagination';
import Button from '../buttons/Button';
import useDriverModal from '@/app/hooks/useDriverModal';

const SeasonsList = () => {

    const params = useSearchParams();
    const router = useRouter();
    const driverModal = useDriverModal();


    const { seasons, qSeasons, error, isLoading } = useSeason({ page: params.get('page') });

    if (error) {
        return (
            <div>Error</div>
        )
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <>
            <Button
                label='Filtrar'
                onClick={driverModal.onOpen}
                small
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-10'>
                {seasons?.SeasonTable.Seasons.map((season) => {
                    return (
                        <SeasonCard
                            key={season.season}
                            season={season}
                            seasonPerPage={seasons.limit}
                        />
                    )
                })}
            </div>
            <Pagination
                count={qSeasons}
                dataPerPage={parseInt(seasons.limit)}
                queryParams={{
                    page: '?page'
                }}
            />
        </>
    );
}

export default SeasonsList;