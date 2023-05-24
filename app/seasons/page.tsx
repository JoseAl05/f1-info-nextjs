import Container from '../components/Container';
import SelectDriverModal from '../components/modals/SelectDriverModal';
import SeasonsList from '../components/seasons/SeasonsList';

const CircuitPage = () => {
    return (
        <Container>
            <div className='flex flex-col items-center py-48'>
                <h1 className='text-black text-3xl font-bold'>Temporadas</h1>
                <SelectDriverModal/>
                <SeasonsList />
            </div>
        </Container>
    );
}

export default CircuitPage;