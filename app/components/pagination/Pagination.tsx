'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Button from '../buttons/Button';
import Container from '../Container';
import qs from 'query-string';

interface PaginationProps {
    count: number;
    dataPerPage: number;
    currentPathname:string;
}

const Pagination: React.FC<PaginationProps> = ({ count, dataPerPage,currentPathname}) => {

    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    let currentPage = parseInt(params.get('page'));

    let numberOfPages = Math.trunc(count / dataPerPage) * dataPerPage;

    if(numberOfPages === dataPerPage){
        numberOfPages = 0;
    }

    let currentQuery = {};

    const onNext = () => {
        currentPage = currentPage + dataPerPage;
        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            page: currentPage
        }

        const url = qs.stringifyUrl({
            url: currentPathname,
            query: updatedQuery
        }, {
            skipNull: true
        })
        router.push(url);
    }

    const onBack = () => {
        currentPage = currentPage - dataPerPage;

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            page: currentPage
        }

        const url = qs.stringifyUrl({
            url: currentPathname,
            query: updatedQuery
        }, {
            skipNull: true
        })
        router.push(url);
    }

    const backToTop = () => {
        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            page: 0
        }

        const url = qs.stringifyUrl({
            url: currentPathname,
            query: updatedQuery
        }, {
            skipNull: true
        })
        router.push(url);
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
                    count > dataPerPage &&
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