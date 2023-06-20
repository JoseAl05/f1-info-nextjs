import Container from '../Container';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='relative flex flex-col items-center bg-white shadow-lg z-10 w-full mt-32 p-3 border-t-[1px] border-neutral-400 border-opacity-50'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 p-10'>
                <div className='flex flex-col items-center'>
                    <p className='text-black text-sm md:text-base lg:text-lg font-light w-full whitespace-normal lg:w-[40vw]'>
                        Utilizamos datos precisos y actualizados de la
                        <a
                            href='http://ergast.com/mrd/'
                            className='text-blue-700 text-sm md:text-base lg:text-lg font-semibold cursor-pointer transition hover:text-black'
                            target='_blank'
                            rel='noreferrer'
                        >
                            &nbsp;API Ergast&nbsp;
                        </a>
                        para ofrecerte información detallada sobre la Fórmula 1.
                        Gracias a Ergast por proporcionar acceso a su API y por su contribución al mundo de las estadísticas de la Fórmula 1.
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-sm md:text-base lg:text-lg w-full md:w-[30vw] whitespace-normal lg:w-[30vw]'>Desarrollado por <b>José Pablo Arancibia Linker: Ingeniero Informatico.</b></p>
                    <p className='text-sm md:text-base lg:text-lg w-full md:w-[30vw] whitespace-normal lg:w-[30vw]'>Si tienes alguna pregunta o sugerencia, no dudes en contactarme.</p>
                    <div className='flex flex-row items-center  gap-8'>
                        <a href='https://twitter.com/JotaPeArancibia' className='cursor-pointer transition hover:scale-105' target='_blank' rel='noreferrer'>
                            <FaTwitter size={30} color='#1DA1F2'/>
                        </a>
                        <a href='https://github.com/JoseAl05' className='cursor-pointer transition hover:scale-105' target='_blank' rel='noreferrer'>
                            <FaGithub size={30} />
                        </a>
                        <a href='https://www.linkedin.com/in/jos%C3%A9-pablo-arancibia-linker-340704177/' className='cursor-pointer transition hover:scale-105' target='_blank' rel='noreferrer'>
                            <FaLinkedin size={30} color='#0077B5' />
                        </a>
                        <a href='mailto:jparancibialinker@gmail.com' className='cursor-pointer transition hover:scale-105' target='_blank' rel='noreferrer'>
                            <SiGmail size={30} color='#BB001B' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <p className='text-black text-xs font-semibold md:text-sm lg:text-base'>© 2023 F1 Info. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;