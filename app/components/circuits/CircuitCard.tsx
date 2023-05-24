'use client'

import { CircuitData } from '@/app/types';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useMemo } from 'react';
import { BiWorld } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import Button from '../buttons/Button';
import { CircuitResponse } from '@/app/types/CircuitTypes';

interface CircuitCardProps {
    circuit: CircuitResponse;
    circuitPerPage: number;
    year:string;
}

const CircuitCard: React.FC<CircuitCardProps> = ({ circuit, circuitPerPage,year }) => {


    const Map = useMemo(() => dynamic(() => import('../map/Map'), {
        ssr: false,
    }), [])


    const coordinates = [
        parseFloat(circuit.lat),
        parseFloat(circuit.lng)
    ];

    return (
        <>
            <h1 className='text-xl font-semibold text-black'>{circuit.name}</h1>
            <div className='flex flex-row justify-between items-center gap-8 w-full'>
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
                    <div className='flex flex-row justify-center items-center gap-8'>
                        <a
                            href={circuit.url}
                            className='
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
                        {
                            year && (
                                <Button
                                    label='Ver datos'
                                    onClick={() => {}}
                                    backgroundColor
                                    small
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default CircuitCard;