'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Button from '../buttons/Button';
import Container from '../Container';

interface PaginationProps {
    count: number;
    dataPerPage: number;
    queryPage: string;
    queryParams?:string;
}

const Pagination: React.FC<PaginationProps> = ({ count, dataPerPage, queryPage ,queryParams }) => {

    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();
    console.log(queryParams);

    let currentPage = parseInt(params.get('page'));
    let currentFilter = params.get('filter');

    const numberOfPages = Math.trunc(count / dataPerPage) * dataPerPage;

    const onNext = () => {
        currentPage = currentPage + dataPerPage;
        router.replace(`${pathname}${queryPage}=${currentPage}${queryParams}=${currentFilter}`);
    }

    const onBack = () => {
        currentPage = currentPage - dataPerPage;
        router.push(`${pathname}${queryPage}=${currentPage}${queryParams}=${currentFilter}`);
    }

    const backToTop = () => {
        router.push(`${pathname}${queryPage}=0${queryParams}=${currentFilter}`);
    }

    return (
        <Container>
            <div className='flex flex-row items-center justify-center gap-8 pt-10'>
                {
                    currentPage !== 0 &&
                    (
                        <AiOutlineArrowLeft onClick={onBack} size={40} color='#D72323' className='cursor-pointer' />
                    )
                }
                {
                    count > 10 &&
                    (
                        <Button
                            label='Volver al principio'
                            onClick={backToTop}
                            backgroundColor
                        />
                    )
                }
                {
                    currentPage !== numberOfPages &&
                    (
                        <AiOutlineArrowRight onClick={onNext} size={40} color='#D72323' className='cursor-pointer' />
                    )
                }
            </div>
        </Container>
    )
}

export default Pagination;