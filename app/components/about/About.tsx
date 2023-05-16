import Container from '../Container';

const About = () => {
    return (
        <Container>
            <div className='flex flex-col items-center gap-5 py-48'>
                <h1 className='text-3xl font-bold text-black'>Bienvenido a F1 Info</h1>
                <p className='text-xl font-light text-black w-1/2'>
                    Un viaje apasionante por la historia de uno de los deportes de motor más emocionantes del mundo.
                    Sumérgete en el fascinante universo de la Fórmula 1 mientras exploras datos históricos de temporadas, circuitos y pilotos legendarios.
                </p>
                <a href="https://www.formula1.com" className='text-xl font-light text-blue-700 transition-all hover:text-red-600 hover:font-semibold' target="_blank" rel="noreferrer">Página oficial de la Formula 1</a>
            </div>
        </Container>
    );
}

export default About;