import Container from '../components/Container';
import SelectDriverModal from '../components/modals/SelectDriverModal';
import SeasonsList from '../components/seasons/SeasonsList';
import getSeasons from '../functions/getSeasons';

const SeasonPage = async({searchParams}:{searchParams: { [key: string]: string | undefined }}) => {

    const seasonsPerPage = 12;
    const currentPage = parseInt(searchParams.page);

    const seasons = await getSeasons({seasonsPerPage:seasonsPerPage,currentPage:currentPage});

    return (
        <Container>
            <div className='flex flex-col items-center py-48'>
                <h1 className='text-black text-3xl font-bold'>Temporadas</h1>
                <SeasonsList
                    seasons={seasons.seasons}
                    qSeasons={seasons.qSeasons}
                />
            </div>
        </Container>
    );
}

export default SeasonPage;