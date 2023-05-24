'use client'

import useCircuit from '@/app/hooks/useCircuit';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form'
import Pagination from '../pagination/Pagination';
import CircuitCard from './CircuitCard';
import YearSelect from '../inputs/YearSelect';
import Button from '../buttons/Button';
import { CircuitResponse } from '@/app/types/CircuitTypes';
import Input from '../inputs/Input';

interface CircuitListProps {
    circuits?: CircuitResponse[];
    qCircuits?: number;
}

const CircuitList: React.FC<CircuitListProps> = ({ circuits, qCircuits }) => {

    const circuitsPerPage = 10;
    const params = useSearchParams();
    const router = useRouter();
    const [searchInput, setSearchInput] = useState('');
    // const [year,setYear] = useState('');

    console.log(qCircuits);


    return (
        <>
            <div className='flex flex-col items-center gap-5'>
                <Input id='searchCircuit' label='Busca un circuito!' type='text' value={searchInput} onChange={(value) => setSearchInput(value.target.value)}/>
                <div className='flex flex-row justify-center items-center gap-5'>
                    <Button
                        label='Buscar'
                        onClick={() => {
                            router.push(`/circuits?page=0&filter=${searchInput}`);
                            setSearchInput('');
                        }}
                        backgroundColor
                    />
                    <Button
                        label='Limpiar filtros'
                        onClick={() => {
                            router.push('/circuits?page=0');
                        }}
                    />
                </div>
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
                count={qCircuits}
                dataPerPage={circuitsPerPage}
                queryPage='?page'
                queryParams='&filter'
            />
        </>
    );
}

export default CircuitList;