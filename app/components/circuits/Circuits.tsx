'use client'

import Container from '../Container';
import Button from '../buttons/Button';

const Circuits = () => {
    return (
        <div className='bg-[#354d77] p-20 w-full bg-opacity-90'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-3xl font-bold text-white'>Circuitos</h1>
                <p className='text-lg font-light text-white break-words max-w-3xl'>
                    Admira la grandeza de los circuitos que han sido testigos de innumerables batallas en la pista.
                    Explora datos historicos de tus circuitos favoritos.
                    A través de imágenes cautivadoras, te llevaremos a los lugares donde la velocidad se convierte en arte.
                </p>
                <Button
                    label='Explorar cirucitos!'
                    onClick={() => {}}
                    disabled={false}
                    small
                    backgroundColor={false}
                />
            </div>
        </div>
    );
}

export default Circuits;