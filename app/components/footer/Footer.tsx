import Container from '../Container';

const Footer = () => {
    return (
        <footer className='relative bg-white shadow-lg z-10 w-full mt-32 p-3 border-t-[1px] border-neutral-400 border-opacity-50'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 p-10'>
                <div className='flex flex-col items-center gap-5'>
                    <p className='text-black text-sm md:text-base lg:text-lg font-light w-full whitespace-normal lg:w-[40vw]'>
                        Utilizamos datos precisos y actualizados de la
                        <a className='text-blue-700 text-sm md:text-base lg:text-lg font-semibold cursor-pointer transition hover:text-black'>
                        &nbsp;API Ergast&nbsp;
                        </a>
                        para ofrecerte información detallada sobre la Fórmula 1.
                        Gracias a Ergast por proporcionar acceso a su API y por su contribución al mundo de las estadísticas de la Fórmula 1.
                    </p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-sm md:text-base lg:text-lg w-full md:w-[40vw] whitespace-normal lg:w-[40vw]'>Desarrollado por <b>José Pablo Arancibia Linker: Ingeniero Informatico.</b></p>
                    <p className='text-sm md:text-base lg:text-lg w-full md:w-[40vw] whitespace-normal lg:w-[40vw]'>Si tienes alguna pregunta o sugerencia, no dudes en contactarme.</p>
                    <div className='flex flex-row items-center justify-center gap-8'>
                        <a className='text-blue-700 text-sm md:text-base lg:text-lg font-semibold cursor-pointer transition hover:text-black'>Github</a>
                        <a className='text-blue-700 text-sm md:text-base lg:text-lg font-semibold cursor-pointer transition hover:text-black'>Twitter</a>
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