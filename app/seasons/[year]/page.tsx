import getRaces from '@/app/functions/getRaces';
import Container from '../../components/Container';
import RacesList from '@/app/components/races/RacesList';

interface SeasonParams {
    year?: number;
}

const SeasonPerYearPage = async ({
    params,
    searchParams,
}: {
    params: SeasonParams;
    searchParams?: { [key: string]: string | string[] | undefined };
}
) => {

    const { year } = params;
    const currentPage = parseInt(searchParams.page);
    const racesPerPage = 10;

    const races = await getRaces({ currentPage: currentPage, racesPerPage: racesPerPage, year: year });

    console.log(races);

    return (
        <Container>
            <div className='flex flex-col items-center py-48'>
                <h1 className='text-black text-3xl font-bold'>Temporada {year}</h1>
                <RacesList
                    races={races.races}
                    qRaces={races.qRaces}
                />
            </div>
        </Container>
    );
}

export default SeasonPerYearPage;