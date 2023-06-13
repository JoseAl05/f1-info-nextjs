'use client'

import Container from '../Container';
import Button from '../buttons/Button';

const Drivers = () => {
    return (
        <Container>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='max-w-2xl mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>Pilotos</h1>
                <p className='max-w-4xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl'>
                    Conoce a las leyendas de la Fórmula 1 que han dejado una huella imborrable en la historia del deporte.
                    Desde los intrépidos pioneros hasta los campeones indiscutibles, te presentamos perfiles detallados de los pilotos más exitosos y carismáticos.
                    Descubre sus logros, carreras destacadas y estadísticas impresionantes.
                </p>
            </div>
        </Container>
    );
}

export default Drivers;