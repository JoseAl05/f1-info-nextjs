import Container from '../components/Container';
import CircuitList from '../components/circuits/CircuitList';

const CircuitPage = () => {
    return (
        <Container>
            <div className='flex flex-col items-center py-48'>
                <h1 className='text-black text-3xl font-bold'>Circuitos</h1>
                <CircuitList/>
            </div>
        </Container>
    );
}

export default CircuitPage;