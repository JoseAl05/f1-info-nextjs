'use client';

import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import qs, { ParsedQuery } from 'query-string';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AlphabetFilter from './AlphabetFilter';
import Button from '../buttons/Button';

type Inputs = {
    dataPerPage: number,
    sortByLetter: string | null,
};

type SearchInput = {
    driverName: string;
}

type Query = {
    dataPerPage?: ParsedQuery<string>,
    sortByLetter?: ParsedQuery<string>,
}

type EntriesOptions = {
    value: number,
    label: string,
}


const DriversFilter = () => {

    let currentQuery: Query = {};
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
    const entriesOptions: EntriesOptions[] = [
        { value: 24, label: "24 Entries" },
        { value: 48, label: "48 Entries" },
        { value: 60, label: "60 Entries" }
    ]

    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const { control, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: {
            dataPerPage: 12,
            sortByLetter: '',
        }
    });

    const searchForm = useForm({
        defaultValues: {
            driverName: ''
        }
    })

    const letterSelected = watch('sortByLetter');

    const onSubmit: SubmitHandler<Inputs> = data => {

        let driversPerPage = 0;


        if (typeof data.dataPerPage !== 'number') {
            driversPerPage = data.dataPerPage['value'];

        } else {
            driversPerPage = data.dataPerPage
        }

        const sortByLetter = data.sortByLetter?.length !== 0 ? data.sortByLetter : null;

        if (driversPerPage) {
            currentQuery.dataPerPage = qs.parse(driversPerPage.toString());
        }

        if (sortByLetter) {
            currentQuery.sortByLetter = qs.parse(sortByLetter.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            dataPerPage: driversPerPage,
            sortByLetter: sortByLetter,
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

        if (formattedDriverForename || formattedDriverSurname) {
            currentQuery = qs.parse(formattedDriverForename + formattedDriverSurname);
        }

        const updatedQuery: any = {
            ...currentQuery,
            driverForename: formattedDriverForename,
            driverSurname: formattedDriverSurname,
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
            dataPerPage: 12,
            sortByLetter: '',
        });
        searchForm.reset({
            driverName: '',
        })
        router.push('/drivers?page=0');
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='pb-5 text-sm text-neutral-500 font-semibold tracking-tight leading-none'>Seleccione la cantidad de pilotos que desea ver por página y haga click en aplicar filtros.</h1>
                <Controller
                    name="dataPerPage"
                    control={control}
                    render={({ field }) =>
                        <Select
                            className='max-w-sm'
                            {...field}
                            //@ts-ignore
                            options={entriesOptions}
                            isDisabled={params.get('driverForename') !== null}
                        />
                    }
                />
                <h1 className='pt-10 text-sm text-neutral-500 font-semibold tracking-tight leading-none'>Seleccione una letra y haga click en aplicar filtros.</h1>
                <div className='grid grid-cols-6 py-10 gap-2 lg:gap-5'>
                    {
                        alphabet.map((letter, index) => {
                            return (
                                <AlphabetFilter
                                    key={letter}
                                    onClick={(value) => setValue('sortByLetter', value)}
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
                        className='
                            text-lg
                            text-black
                            font-light
                            p-3
                            bg-transparent
                            border
                            border-black
                            rounded-xl
                            cursor-pointer
                            transition
                            disabled:cursor-not-allowed
                            disabled:hover:bg-white
                            disabled:hover:text-black
                            hover:bg-red-600
                            hover:text-white
                        '
                        disabled={params.get('driverForename') !== null}
                    />
                    <Button
                        label='Limpiar Filtros'
                        onClick={cleanFilters}
                    />
                </div>
            </form>
            <form onSubmit={searchForm.handleSubmit(onSearchSubmit)} className='relative flex flex-col items-center lg:items-end gap-5'>
                <input
                    type="text"
                    {...searchForm.register('driverName')}
                    placeholder='Busca un piloto, ej: Fernando Alonso'
                    className='w-full text-base p-2 border border-neutral-400 rounded-xl md:text-lg lg:text-xl md:w-[45vw] lg:w-[25vw] disabled:cursor-not-allowed'
                    disabled={params.get('sortByLetter') !== null}
                />
                <input
                    type="submit"
                    value='Buscar'
                    className='
                        text-lg
                        text-black
                        font-light
                        p-3
                        bg-transparent
                        border
                        border-black
                        rounded-xl
                        cursor-pointer
                        transition
                        hover:bg-red-600
                        hover:text-white
                        disabled:cursor-not-allowed
                        disabled:hover:bg-transparent
                        disabled:hover:text-black
                    '
                    disabled={params.get('sortByLetter') !== null}
                />
            </form>
        </>
    );
}

export default DriversFilter;