'use client';

import useImage from '@/app/hooks/useImage';
import Image from 'next/image';
import placeholder from '/public/images/placeholder.png';

interface SeasonImageProps {
    seasonYear:number;
}

const SeasonImage:React.FC<SeasonImageProps> = ({seasonYear}) => {

    let title = ''
    if(seasonYear > 1980){
        title = `${seasonYear}_Formula_One_World_Championship`;
    } else {
        title = `${seasonYear}_Formula_One_season`;
    }

    const { imageData, error, isLoading } = useImage({ title: title });
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
                alt={`Season ${seasonYear}`}
                //@ts-ignore
                src={imageData?.pages[imageId].original ? imageData?.pages[imageId].original?.source : placeholder}
                //@ts-ignore
                width={imageData?.pages[imageId].original ? imageData?.pages[imageId].original.width : 0}
                //@ts-ignore
                height={imageData?.pages[imageId].original ? imageData?.pages[imageId].original.height : 0}
                className='object-cover h-full w-full'
            />
        </div>
    );
}

export default SeasonImage;