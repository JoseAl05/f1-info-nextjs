'use client'

import useCircuit from '@/app/hooks/useCircuit';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Pagination from '../pagination/Pagination';
import CircuitCard from './CircuitCard';
import YearSelect from '../inputs/YearSelect';

const CircuitList = () => {


    const params = useSearchParams();

    const {
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            year: ''
        }
    });

    const yearSelected = watch('year');


    const { circuits, qCircuits, error, isLoading } = useCircuit({ page: params.get('page'), year: yearSelected });


    if (error) {
        return (
            <div>Error</div>
        )
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <>
            <YearSelect
                value={yearSelected}
                onChange={(value) => setValue('year', value)}
            />
            <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {circuits.CircuitTable.Circuits.map((circuit) => {
                    return (
                        <CircuitCard
                            key={circuit.circuitId}
                            circuit={circuit}
                            circuitPerPage={circuits.limit}
                        />
                    )
                })}
            </div>
            <Pagination
                count={qCircuits}
                dataPerPage={parseInt(circuits.limit)}
            />
        </>
    );
}

export default CircuitList;