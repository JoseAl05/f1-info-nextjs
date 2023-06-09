import Link from 'next/link';

const Menu = () => {
    return (
        <>
            <Link href='/' className='block md:hidden lg:hidden font-semibold text-black text-xl cursor-pointer transition hover:text-[#D72323]'>Inicio</Link>
            <Link href='/circuits?country=all&page=0' className='font-semibold text-black text-xl cursor-pointer transition hover:text-[#D72323]'>Circuitos</Link>
            <Link href='/seasons?page=0' className='font-semibold text-black text-xl cursor-pointer transition hover:text-[#D72323]'>Temporadas</Link>
            <Link href='/drivers?page=0' className='font-semibold text-black text-xl cursor-pointer transition hover:text-[#D72323]'>Pilotos</Link>
            <Link href='/constructors?page=0' className='font-semibold text-black text-xl cursor-pointer transition hover:text-[#D72323]'>Constructores</Link>
        </>
    );
}

export default Menu;