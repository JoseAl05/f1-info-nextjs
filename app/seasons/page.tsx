import Container from '../components/Container';
import SeasonsFilter from '../components/inputs/SeasonsFilter';
import SeasonsList from '../components/seasons/SeasonsList';
import getSeasons from '../functions/getSeasons';

const SeasonPage = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

    const seasonsPerPage = searchParams?.dataPerPage ? parseInt(searchParams?.dataPerPage!) : 12;
    const decade = searchParams?.decade ? parseInt(searchParams?.decade!) : null;
    const currentPage = parseInt(searchParams?.page!);

    const seasons = await getSeasons({ seasonsPerPage: seasonsPerPage, currentPage: currentPage, decade: decade });

    return (
        <Container>
            <div className='flex flex-col items-stretch pt-56 md:pt-48 lg:pt-48 gap-5'>
                <h1 className='text-black text-3xl text-center font-bold'>Temporadas</h1>
                <SeasonsFilter
                    seasons={seasons.seasons}
                />
                <SeasonsList
                    seasons={seasons.seasons}
                    qSeasons={seasons.qSeasons}
                />
            </div>
        </Container>
    );
}

export default SeasonPage;