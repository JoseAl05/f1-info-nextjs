'use client'

import Container from '../Container';
import Button from '../buttons/Button';

const Circuits = () => {
    return (
        <div className='bg-black  bg-opacity-90 border-t border-black'>

            <div className='flex flex-col items-center gap-8 p-5'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-neutral-300 uppercase'>Circuitos</h1>
                <p className='text-sm md:text-base lg:text-lg font-light text-neutral-300 max-w-4xl'>
                    Admira la grandeza de los circuitos que han sido testigos de innumerables batallas en la pista.
                    Explora datos historicos de tus circuitos favoritos.
                    A través de imágenes cautivadoras, te llevaremos a los lugares donde la velocidad se convierte en arte.
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

export default Circuits;