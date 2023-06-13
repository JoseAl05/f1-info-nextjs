import Container from '../Container';

const About = () => {
    return (
        <Container>
            <div className='flex flex-col items-center gap-5 pt-56 pb-32 md:pt-48 lg:pt-48'>
                <h1 className='max-w-2xl mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>Bienvenido a F1 Info</h1>
                <p className='max-w-4xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl'>
                    Un viaje apasionante por la historia de uno de los deportes de motor más emocionantes del mundo.
                    Sumérgete en el fascinante universo de la Fórmula 1 mientras exploras datos históricos de temporadas, circuitos y pilotos legendarios.
                </p>
                <a href="https://www.formula1.com" className='text-base font-light text-blue-700 transition-all lg:text-xl hover:text-red-600 hover:font-semibold' target="_blank" rel="noreferrer">Página oficial de la Formula 1</a>
            </div>
        </Container>
    );
}

export default About;