'use client'

import Container from '../Container';
import Button from '../buttons/Button';

const Seasons = () => {
    return (
        <div className='bg-[#D72323] p-20 w-full bg-opacity-90'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-3xl font-bold text-white'>Temporadas</h1>
                <p className='text-lg font-light text-white break-words max-w-3xl'>
                    Sumérgete en el pasado y revive las temporadas más emocionantes de la Fórmula 1.
                    Acompaña a los pilotos en su lucha por el campeonato, conoce los momentos históricos que definieron las carreras y
                    explora las estadísticas que dejaron huella en el deporte.
                </p>
                <Button
                    label='Explorar temporadas!'
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