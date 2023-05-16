import Container from '../Container';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='fixed z-10 w-full bg-white shadow-sm'>
            <div className='border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <Logo />
                        <Menu />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;