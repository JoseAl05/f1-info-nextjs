'use client'

import Container from '../Container';
import Button from '../buttons/Button';

const Seasons = () => {
    return (
        <div className='bg-black bg-opacity-90'>

            <div className='flex flex-col items-center gap-8 p-5'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-neutral-300 uppercase'>Temporadas</h1>
                <p className='text-sm md:text-base lg:text-lg font-light text-neutral-300 max-w-4xl'>
                    Sumérgete en el pasado y revive las temporadas más emocionantes de la Fórmula 1.
                    Acompaña a los pilotos en su lucha por el campeonato, conoce los momentos históricos que definieron las carreras y
                    explora las estadísticas que dejaron huella en el deporte.
                </p>
                <Button
                    label='Ver más'
                    onClick={() => { }}
                    disabled={false}
                    small
                    backgroundColor={false}
                />
            </div>

        </div>
    );
}

export default Seasons;