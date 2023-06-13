import Image from 'next/image';
import Container from '../Container';
import Button from '../buttons/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import seasonImage from '../../../public/images/seasonImage.png';
import Link from 'next/link';


const Seasons = () => {
    return (
        <div className='bg-gray-900'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className='place-self-center mr-auto lg:col-span-7'>
                    <h1 className='max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>Temporadas</h1>
                    <p className='max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl'>
                        Sumérgete en el pasado y revive las temporadas más emocionantes de la Fórmula 1.
                        Acompaña a los pilotos en su lucha por el campeonato, conoce los momentos históricos que definieron las carreras y
                        explora las estadísticas que dejaron huella en el deporte.
                    </p>
                    <Link
                        href='/seasons?page=0'
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
                        Ir a temporadas
                        <AiOutlineArrowRight size={20} color='white' />
                    </Link>
                </div>
                <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                    <Image
                        alt='Season Image'
                        src={seasonImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Seasons;