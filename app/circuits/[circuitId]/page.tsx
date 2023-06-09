import {getRaces} from '@/app/functions/getRaces';
import Container from '../../components/Container';
import RacesList from '@/app/components/races/RacesList';
import {getRacesByCircuit} from '@/app/functions/getRaces';

interface RacesPerCircuitParams {
    circuitId: string;
}

const RacesPerCircuitPage = async({
    params,
    searchParams,
}: {
    params: RacesPerCircuitParams;
    searchParams?: { [key: string]: string | undefined };
}) => {

    const racesPerPage = 10;
    const currentPage = parseInt(searchParams?.page!);
    const {circuitId} = params;
    const races = await getRacesByCircuit({racesPerPage:racesPerPage,currentPage:currentPage,circuitId:parseInt(circuitId)});

    return (
        <Container>
            <div className='flex flex-col items-center pt-56 md:pt-48 lg:pt-48'>
                <h1 className='text-black text-3xl font-bold'>Carreras Disputadas</h1>
                <RacesList
                    races={races.racesPerCircuit}
                    qRaces={races.qRacesPerCircuit}
                />
            </div>
        </Container>
    );
}

export default RacesPerCircuitPage;