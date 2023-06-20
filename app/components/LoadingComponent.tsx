'use client';
import { Ring } from '@uiball/loaders'
import Image from 'next/image';
import logo from '../../public/images/logo.png';


const LoadingComponent = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center'>
            <Image
                alt='Logo'
                src={logo}
                width='100'
                height='100'
            />
            <Ring
                size={40}
                speed={1.5}
                color="red"
            />
        </div>
    );
}

export default LoadingComponent;