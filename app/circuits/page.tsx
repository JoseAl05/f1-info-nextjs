import Container from '../components/Container';
import CircuitList from '../components/circuits/CircuitList';
import Input from '../components/inputs/Input';
import { getCircuits } from '../functions/getCircuits';


const CircuitPage = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

    const circuitsPerPage = 10;
    const currentPage = parseInt(searchParams?.page!);
    const circuitCountry = searchParams?.country!;
    const circuits = await getCircuits({ circuitsPerPage: circuitsPerPage, currentPage: currentPage, circuitCountry: circuitCountry });


    return (
        <Container>
            <div className='flex flex-col items-center py-48'>
                <h1 className='text-black text-3xl font-bold'>Circuitos</h1>
                <CircuitList
                    circuits={circuits.circuits}
                    qCircuits={circuits.qCircuits}
                />
            </div>
        </Container>
    );
}

export default CircuitPage;