import Container from '../Container';

const Footer = () => {
    return (
        <footer className='relative bg-white shadow-lg z-10 w-full mt-32 border-t-[1px] border-opacity-50'>
            <div className='flex flex-row items-center justify-around gap-8 p-10'>
                <div className='flex flex-col items-start gap-2'>
                    <p className='text-black font-light w-[40vw] text-lg'>
                        Utilizamos datos precisos y actualizados de la API Ergast para ofrecerte información detallada sobre la Fórmula 1.
                        Gracias a Ergast por proporcionar acceso a su API y por su contribución al mundo de las estadísticas de la Fórmula 1.
                    </p>
                    <a className='text-blue-700 font-semibold cursor-pointer transition hover:text-black'>@Ergast</a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p>Desarrollado por <b>José Pablo Arancibia Linker: Ingeniero Informatico.</b></p>
                    <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarme.</p>
                    <div className='flex flex-row items-center justify-center gap-8'>
                        <a className='text-blue-700 font-semibold cursor-pointer transition hover:text-black'>Github</a>
                        <a className='text-blue-700 font-semibold cursor-pointer transition hover:text-black'>Twitter</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <p className='text-black font-semibold'>© 2023 F1 Info. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;