import { Ring } from '@uiball/loaders'
import Image from 'next/image';
import logo from '../public/images/logo.png';


const LoadingPage = () => {
    return (
        <div className='flex flex-col items-center gap-5'>
            <Image
                alt='Logo'
                src={logo}
                width={100}
                height={100}
            />
            <Ring
                size={40}
                lineWeight={5}
                speed={2}
                color="black"
            />
        </div>
    );
}

export default LoadingPage;