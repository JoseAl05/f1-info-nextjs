'use client'

import useImage from '@/app/hooks/useImage';
import { CircuitData } from '@/app/types';
import axios from 'axios';
import Image from 'next/image';
import { BiWorld } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import Map from '../map/Map';

interface CircuitCardProps {
    circuit: CircuitData;
    circuitPerPage: number;
}

const CircuitCard: React.FC<CircuitCardProps> = ({ circuit, circuitPerPage }) => {


    const getImage = useImage({
        title: circuit.circuitName
    })

    if (getImage.error) {
        return (
            <div>Error</div>
        )
    }

    if (getImage.isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    const coordinates = [
        parseFloat(circuit.Location.lat),
        parseFloat(circuit.Location.long)
    ];

    return (
        <div className='col-span-1'>
            <div className='flex flex-col gap-8 w-full border border-1 p-5 rounded-lg border-neutral-300 overflow-hidden'>
                <h1 className='text-xl font-semibold text-black'>{circuit.circuitName}</h1>
                <Map
                    center={coordinates}
                />
                <div className='flex flex-row gap-2'>
                    <BiWorld size={24} />
                    <span>{circuit.Location.country}</span>
                </div>
                <hr />
                <div className='flex flex-row gap-2'>
                    <HiLocationMarker size={24} />
                    <span>{circuit.Location.locality}</span>
                </div>
                <a href={circuit.url} className='text-lg font-light text-white text-center bg-neutral-400 p-1 rounded-lg transition hover:bg-red-500 hover:scale-105'>Go to Wiki</a>
            </div>
        </div>
    );
}

export default CircuitCard;