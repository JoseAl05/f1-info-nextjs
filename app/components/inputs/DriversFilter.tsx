'use client';

import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import qs from 'query-string';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AlphabetFilter from './AlphabetFilter';
import Button from '../buttons/Button';

type Inputs = {
    dataPerPage: string,
    sortByLetter:string,
};

type SearchInput = {
    driverName:string;
}

const DriversFilter = () => {

    let currentQuery = {};
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const { control, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: {
            dataPerPage: 12,
            sortByLetter: null,
        }
    });

    const searchForm = useForm({
        defaultValues:{
            driverName:null
        }
    })

    const letterSelected = watch('sortByLetter');

    const onSubmit: SubmitHandler<Inputs> = data => {

        const driversPerPage = Object.hasOwn(data.dataPerPage, 'value') ? data.dataPerPage.value : data.dataPerPage;
        const sortByLetter = data.sortByLetter;

        if (driversPerPage) {
            currentQuery.dataPerPage = qs.parse(driversPerPage.toString());
        }

        if(sortByLetter){
            currentQuery.sortByLetter = qs.parse(sortByLetter.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            dataPerPage: driversPerPage,
            sortByLetter:sortByLetter,
            page: 0,
        }

        const url = qs.stringifyUrl({
            url: pathname,
            query: updatedQuery
        }, {
            skipNull: true
        })
        router.push(url);
    };

    const onSearchSubmit: SubmitHandler<SearchInput> = data => {
        const arr = data.driverName?.split(' ');

        for (let i = 0; i < arr?.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }


        const formattedDriverForename = arr[0];
        const formattedDriverSurname = arr[1];

        if(formattedDriverForename || formattedDriverSurname){
            currentQuery = qs.parse(formattedDriverForename + formattedDriverSurname);
        }

        const updatedQuery: any = {
            ...currentQuery,
            driverForename:formattedDriverForename,
            driverSurname:formattedDriverSurname,
            page: 0,
        }

        const url = qs.stringifyUrl({
            url: pathname,
            query: updatedQuery
        }, {
            skipNull: true
        })
        router.push(url);
    }

    const cleanFilters = () => {
        reset({
            dataPerPage:12,
            sortByLetter:null,
        });
        searchForm.reset({
            driverName:null,
        })
        router.push('/drivers?page=0');
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="dataPerPage"
                    control={control}
                    render={({ field }) =>
                        <Select
                            className='max-w-sm'
                            {...field}
                            options={[
                                { value: 24, label: "24 Entries" },
                                { value: 48, label: "48 Entries" },
                                { value: 60, label: "60 Entries" }
                            ]}
                            isDisabled={params.get('driverForename') !== null}
                        />
                    }
                />
                <div className='flex flex-row flex-wrap justify-center items-center gap-2 py-10 sm:flex-nowrap'>
                    {
                        alphabet.map((letter, index) => {
                            return (
                                <AlphabetFilter
                                    key={letter}
                                    onClick={(value) => setValue('sortByLetter',value)}
                                    selected={letterSelected === letter}
                                    label={letter}
                                    disabled={params.get('driverForename') !== null}
                                />
                            )
                        })
                    }
                </div>
                <div className='flex flex-row items-center gap-5 pb-14'>
                    <input
                        type="submit"
                        value='Aplicar filtros'
                        className='text-lg text-black font-light p-3 bg-transparent border border-black rounded-xl cursor-pointer transition hover:bg-red-600 hover:text-white'
                    />
                    <Button
                        label='Limpiar Filtros'
                        onClick={cleanFilters}
                    />
                </div>
            </form>
            <form onSubmit={searchForm.handleSubmit(onSearchSubmit)} className='relative flex flex-col items-end gap-5'>
                <input
                    type="text"
                    {...searchForm.register('driverName')}
                    placeholder='Busca un piloto, ej: Fernando Alonso'
                    className='w-[25vw] text-xl p-2 border border-neutral-400 rounded-xl'
                    disabled={params.get('sortByLetter') !== null}
                />
                <input
                    type="submit"
                    value='Buscar'
                    className='text-lg text-black font-light p-3 bg-transparent border border-black rounded-xl cursor-pointer transition hover:bg-red-600 hover:text-white'
                />
            </form>
        </>
    );
}

export default DriversFilter;