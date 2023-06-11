import Container from '../Container';

const About = () => {
    return (
        <Container>
            <div className='flex flex-col items-center gap-5 pt-48 pb-32'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-black'>Bienvenido a F1 Info</h1>
                <p className='text-base lg:text-xl font-light text-black max-w-4xl'>
                    Un viaje apasionante por la historia de uno de los deportes de motor más emocionantes del mundo.
                    Sumérgete en el fascinante universo de la Fórmula 1 mientras exploras datos históricos de temporadas, circuitos y pilotos legendarios.
                </p>
                <a href="https://www.formula1.com" className='text-base font-light text-blue-700 transition-all lg:text-xl hover:text-red-600 hover:font-semibold' target="_blank" rel="noreferrer">Página oficial de la Formula 1</a>
            </div>
        </Container>
    );
}

export default About;