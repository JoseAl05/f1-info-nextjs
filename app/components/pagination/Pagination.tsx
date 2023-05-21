'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';

interface PaginationProps {
    count: number;
    dataPerPage:number;
}

const Pagination: React.FC<PaginationProps> = ({ count,dataPerPage }) => {

    const router = useRouter();
    const params = useSearchParams();

    let currentPage = parseInt(params.get('page'));

    const numberOfPages = Math.trunc(count/dataPerPage) * dataPerPage;

    const onNext = () => {
        currentPage = currentPage + dataPerPage;
        router.replace(`/circuits/?page=${currentPage}`);
    }

    const onBack = () => {
        currentPage = currentPage - dataPerPage;
        router.push(`/circuits/?page=${currentPage}`);
    }

    return (
        <div className='flex flex-row items-center justify-around gap-16 pt-10'>
            {
                currentPage !== 0 &&
                (
                    <AiOutlineArrowLeft onClick={onBack} size={40} color='#D72323' className='cursor-pointer'/>
                    // <button onClick={onBack} className='bg-red-500 text-white text-lg font-light p-2 rounded-lg'>Anterior</button>
                )
            }
            {
                currentPage !== numberOfPages &&
                (
                    <AiOutlineArrowRight onClick={onNext} size={40} color='#D72323' className='cursor-pointer' />
                    // <button onClick={onNext} className='bg-red-500 text-white text-lg font-light p-2'>Siguiente</button>
                )
            }
        </div>
    )
}

export default Pagination;