import Container from '../Container';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='fixed z-10 w-full bg-white shadow-sm'>
            <div className='border-b-[1px] p-3 md:p-0 lg:p-0'>
                <Container>
                    <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between gap-3 md:gap-0 lg:gap-0'>
                        <Logo />
                        <Menu />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;