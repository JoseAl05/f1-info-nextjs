'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback } from 'react';
import Pagination from '../pagination/Pagination';
import CircuitCard from './CircuitCard';
import Button from '../buttons/Button';
import { CircuitResponse } from '@/app/types/CircuitTypes';
import Input from '../inputs/Input';
import qs from 'query-string';
import { circuits } from '@prisma/client';
import CountrySelect from '../inputs/CountrySelect';

interface CircuitListProps {
    circuits?: circuits[];
    qCircuits?: number;
    countries:{
        country: string | null;
    }[];
}

const CircuitList: React.FC<CircuitListProps> = ({ circuits, qCircuits,countries }) => {

    const circuitsPerPage = 10;
    const params = useSearchParams();
    const router = useRouter();
    // const [circuitCountryInput, setCircuitCountryInput] = useState('');

    // const handleClick = useCallback(() => {
    //     let currentQuery = {};

    //     if (params) {
    //         currentQuery = qs.parse(params.toString());
    //     }

    //     const updatedQuery: any = {
    //         ...currentQuery,
    //         country:circuitCountryInput,
    //         page: 0
    //     }

    //     const url = qs.stringifyUrl({
    //         url: '/circuits',
    //         query: updatedQuery
    //     }, {
    //         skipNull: true
    //     })

    //     setCircuitCountryInput('');

    //     router.push(url);

    // }, [params, router,circuitCountryInput]);

    return (
        <>
            <div className='flex flex-col items-center gap-5'>
                <CountrySelect
                    countries={countries}
                />
                {/* <div className='flex flex-col items-center'>
                    <Input
                        id='searchCircuitByCountry'
                        label='Pais del circuito'
                        type='text'
                        value={circuitCountryInput}
                        onChange={(value:React.ChangeEvent<HTMLInputElement>) => {
                            setCircuitCountryInput(value.target.value);
                        }}
                    />
                    <small className='text-red-400'>* Ingrese los paises en ingles. Por ejemplo: Italy, Spain, USA, etc...</small>
                </div> */}
                {/* <div className='flex flex-row justify-center items-center gap-5'>
                    <Button
                        label='Buscar'
                        onClick={handleClick}
                        backgroundColor
                    />

                </div> */}
            </div>
            <div className='pt-10 flex flex-col gap-8'>
                {circuits?.map((circuit) => {
                    return (
                        <CircuitCard
                            key={circuit.circuitId}
                            circuit={circuit}
                            circuitPerPage={circuitsPerPage}
                        />
                    )
                })}
            </div>
            <Pagination
                count={qCircuits ? qCircuits : 0}
                dataPerPage={circuitsPerPage}
                currentPathname='/circuits'
            />
        </>
    );
}

export default CircuitList;