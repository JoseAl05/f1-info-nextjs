import {getRaces} from '@/app/functions/getRaces';
import Container from '../../components/Container';
import RacesList from '@/app/components/races/RacesList';

interface SeasonParams {
    year?: string;
}

const SeasonPerYearPage = async ({
    params,
    searchParams,
}: {
    params: SeasonParams;
    searchParams?: { [key: string]: string | undefined };
}
) => {

    const { year } = params;
    const currentPage = parseInt(searchParams?.page!);
    const racesPerPage = 10;
    const formattedYear = year ? year : '';

    const races = await getRaces({ currentPage: currentPage, racesPerPage: racesPerPage, year: parseInt(formattedYear) });


    return (
        <Container>
            <div className='flex flex-col items-center pt-56 md:pt-48 lg:pt-48'>
                <h1 className='text-black text-3xl font-bold'>Carreras disputadas el año {year}</h1>
                <RacesList
                    races={races.races}
                    year={year}
                    qRaces={races.qRaces}
                />
            </div>
        </Container>
    );
}

export default SeasonPerYearPage;