import getRaces from '@/app/functions/getRaces';
import Container from '../../components/Container';
import RacesList from '@/app/components/races/RacesList';
import {getRacesByCircuit} from '@/app/functions/getCircuits';

interface RacesPerCircuitParams {
    circuitId?: number;
}

const RacesPerCircuitPage = async({
    params,
    searchParams,
}: {
    params: RacesPerCircuitParams;
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {

    const racesPerPage = 10;
    const currentPage = parseInt(searchParams.page);
    const {circuitId} = params;
    const races = await getRacesByCircuit({racesPerPage:racesPerPage,currentPage:currentPage,circuitId:circuitId});

    return (
        <Container>
            <div className='flex flex-col items-center py-48'>
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