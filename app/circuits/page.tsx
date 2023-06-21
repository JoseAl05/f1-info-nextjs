import Container from '../components/Container';
import CircuitList from '../components/circuits/CircuitList';
import Input from '../components/inputs/Input';
import { getCircuits, getCircuitsCountries } from '../functions/getCircuits';


const CircuitPage = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

    const circuitsPerPage = 10;
    const currentPage = parseInt(searchParams?.page!);
    const circuitCountry = searchParams?.country!;
    const circuits = await getCircuits({ circuitsPerPage: circuitsPerPage, currentPage: currentPage, circuitCountry: circuitCountry });
    const countries = await getCircuitsCountries();


    return (
        <Container>
            <div className='flex flex-col items-center pt-56 md:pt-48 lg:pt-48'>
                <h1 className='text-black text-3xl font-bold'>Circuitos</h1>
                <CircuitList
                    circuits={circuits?.circuits}
                    qCircuits={circuits?.qCircuits}
                    countries={countries}
                />
            </div>
        </Container>
    );
}

export default CircuitPage;