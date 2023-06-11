'use client'

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { BiWorld } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import Button from '../buttons/Button';
import { CircuitResponse } from '@/app/types/CircuitTypes';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface CircuitCardProps {
    circuit: CircuitResponse;
    circuitPerPage: number;
}

const CircuitCard: React.FC<CircuitCardProps> = ({ circuit, circuitPerPage }) => {

    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    const country = params.get('country');

    const Map = useMemo(() => dynamic(() => import('../map/Map'), {
        ssr: false,
    }), [])


    const coordinates = [
        parseFloat(circuit.lat),
        parseFloat(circuit.lng)
    ];

    return (
        <>
            <h1 className='text-xl font-semibold text-black text-center md:text-start lg:text-start'>{circuit.name}</h1>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center gap-8 w-full'>
                <Map
                    center={coordinates}
                />
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-row gap-2'>
                        <BiWorld size={24} />
                        <span>{circuit.country}</span>
                        <HiLocationMarker size={24} />
                        <span>{circuit.location}</span>
                    </div>
                    <div className='flex flex-row items-center gap-8'>
                        <a
                            href={circuit.url}
                            className='
                                relative
                                p-2
                                text-lg
                                font-light
                                text-black
                                text-center
                                bg-transparent
                                border
                                border-black
                                rounded-lg
                                transition
                                hover:bg-red-500
                                hover:scale-105
                                '
                            target='_blank'
                            rel='noreferrer'
                        >
                            Más Información
                        </a>
                        <Button
                            label='Ver datos'
                            onClick={() => router.push(`/circuits/${circuit.circuitId}?page=0`)}
                            backgroundColor
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CircuitCard;