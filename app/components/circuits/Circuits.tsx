import Container from '../Container';
import Button from '../buttons/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import circuitImage from '../../../public/images/circuitImage.png';
import Image from 'next/image';
import Link from 'next/link';

const Circuits = () => {
    return (
        <div className='bg-gray-900'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className='place-self-center mr-auto lg:col-span-7'>
                    <h1 className='max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>Circuitos</h1>
                    <p className='max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl'>
                        Admira la grandeza de los circuitos que han sido testigos de innumerables batallas en la pista.
                        Explora datos historicos de tus circuitos favoritos.
                        A través de imágenes cautivadoras, te llevaremos a los lugares donde la velocidad se convierte en arte.
                    </p>
                    <Link
                        href='/circuits?page=0'
                        className='
                            inline-flex
                            items-center
                            justify-center
                            py-3
                            mr-3
                            text-base
                            font-medium
                            text-center
                            text-white
                            rounded-lg
                            bg-primary-700
                            transition
                            hover:scale-105
                            hover:bg-primary-800
                            focus:ring-4
                            focus:ring-primary-900
                        '
                    >
                        Ir a circuitos
                        <AiOutlineArrowRight size={20} color='white' />
                    </Link>
                </div>
                <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                    <Image
                        alt='Circuit Image'
                        src={circuitImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Circuits;