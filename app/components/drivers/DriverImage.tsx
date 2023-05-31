'use client';

import useImage from '@/app/hooks/useImage';
import { DriverResponse } from '@/app/types/DriverTypes';
import Image from 'next/image';
import placeholder from '/public/images/placeholder.png';

interface DriverImageProps {
    driver?:DriverResponse;
}

const DriverImage: React.FC<DriverImageProps> = ({ driver}) => {

    const { imageData, error, isLoading } = useImage({ title: `${driver.forename} ${driver.surname}` });
    const imageId = imageData?.pageids[0];

    if (isLoading) {
        return(
            <p>
                Loading...
            </p>
        )
    }

    if (error) {
        return(
            <p>
                Error.
            </p>
        )
    }


    return (
        <div className='w-full relative overflow-hidden rounded-xl grayscale group-hover:grayscale-0'>
            <Image
                alt={driver?.forename}
                src={imageData?.pages[imageId].original ? imageData?.pages[imageId].original?.source : placeholder}
                width={imageData?.pages[imageId].original ? imageData?.pages[imageId].original.width : 0}
                height={imageData?.pages[imageId].original ? imageData?.pages[imageId].original.height : 0}
                className='object-cover h-full w-full'
            />
        </div>
    );
}

export default DriverImage;