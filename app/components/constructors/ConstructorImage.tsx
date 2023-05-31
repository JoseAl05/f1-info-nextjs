'use client';

import useImage from '@/app/hooks/useImage';
import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import { DriverResponse } from '@/app/types/DriverTypes';
import Image from 'next/image';
import logo from '/public/images/logo.png';

interface ConstructorImageProps {
    constructor?:ConstructorResponse;
}

const ConstructorImage: React.FC<ConstructorImageProps> = ({ constructor }) => {

    const { imageData, error, isLoading } = useImage({ title: constructor?.name });
    const imageId = imageData?.pageids[0];

    if (isLoading) {
        <p>
            Loading...
        </p>
    }

    if (error) {
        <p>
            Error.
        </p>
    }


    return (
        <div className='w-full relative overflow-hidden rounded-xl grayscale group-hover:grayscale-0'>
            {

                    <Image
                        alt={constructor?.name}
                        src={imageData?.pages[imageId].original ? imageData?.pages[imageId].original?.source : logo}
                        width={imageData?.pages[imageId].original ? imageData?.pages[imageId].original.width : 0}
                        height={imageData?.pages[imageId].original ? imageData?.pages[imageId].original.height : 0}
                        className='object-cover h-full w-full'
                    />
                
            }
        </div>
    );
}

export default ConstructorImage;