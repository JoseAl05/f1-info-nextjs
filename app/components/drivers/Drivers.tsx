'use client'

import Container from '../Container';
import Button from '../buttons/Button';

const Drivers = () => {
    return (
        <Container>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='text-3xl font-bold text-black'>Pilotos</h1>
                <p className='text-lg font-light text-black break-words w-full'>
                    Conoce a las leyendas de la Fórmula 1 que han dejado una huella imborrable en la historia del deporte.
                    Desde los intrépidos pioneros hasta los campeones indiscutibles, te presentamos perfiles detallados de los pilotos más exitosos y carismáticos.
                    Descubre sus logros, carreras destacadas y estadísticas impresionantes.
                </p>
                <Button
                    label='Explorar pilotos!'
                    onClick={() => { }}
                    disabled={false}
                    small
                    backgroundColor
                />
            </div>
        </Container>
    );
}

export default Drivers;