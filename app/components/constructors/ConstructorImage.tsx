'use client';

import useImage from '@/app/hooks/useImage';
import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import { DriverResponse } from '@/app/types/DriverTypes';
import Image from 'next/image';
import logo from '/public/images/logo.png';
import { constructors } from '@prisma/client';

interface ConstructorImageProps {
    team: constructors | null;
}

const ConstructorImage: React.FC<ConstructorImageProps> = ({ team }) => {

    const { imageData, error, isLoading } = useImage({ title: team!.name });
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
                    alt={team!.name && 'Constructor'}
                    //@ts-ignore
                    src={imageData?.pages[imageId]?.original ? imageData?.pages[imageId]?.original.source : logo}
                    //@ts-ignore
                    width={imageData?.pages[imageId]?.original ? imageData?.pages[imageId]?.original.width : 0}
                    //@ts-ignore
                    height={imageData?.pages[imageId]?.original ? imageData?.pages[imageId]?.original.height : 0}
                    className='object-cover h-full w-full'
                />
            }
        </div>
    );
}

export default ConstructorImage;