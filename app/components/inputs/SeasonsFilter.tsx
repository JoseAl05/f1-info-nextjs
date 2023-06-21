'use client';

import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import qs, { ParsedQuery } from 'query-string';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Button from '../buttons/Button';
import { seasons } from '@prisma/client';


type Inputs = {
    dataPerPage: number,
    decade: number,
};

type EntriesOptions = {
    value: number,
    label: string,
}

type DecadesOptions = {
    value: number,
    label: string
}

type Query = {
    dataPerPage?: ParsedQuery<string>,
    decade?: ParsedQuery<string>,
}

interface SeasonFilterProps {
    seasons: seasons[];
}

const SeasonsFilter: React.FC<SeasonFilterProps> = ({ seasons }) => {

    let currentQuery: Query = {};

    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const seasonsDecadesOptions: DecadesOptions[] = [];

    for (let year = 1950; year <= 2020; year += 10) {
        const decade = Math.floor(year / 10) * 10;
        const label = `Década del ${decade}`;
        seasonsDecadesOptions.push({ value: year, label: label });
    }

    const entriesOptions: EntriesOptions[] = [
        { value: 24, label: "24 Entries" },
        { value: 48, label: "48 Entries" },
        { value: 60, label: "60 Entries" }
    ]


    const { control, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: {
            dataPerPage: 12,
            decade: 0,
        }
    });

    const onSubmit: SubmitHandler<Inputs> = data => {

        let seasonsPerPage = 0;

        let decade = 0;

        if (typeof data.dataPerPage !== 'number') {
            seasonsPerPage = data.dataPerPage['value'];

        } else {
            seasonsPerPage = data.dataPerPage;
        }

        if (typeof data.decade !== 'number') {
            decade = data.decade['value'];
        } else {
            decade = data.decade;
        }

        if (seasonsPerPage) {
            currentQuery.dataPerPage = qs.parse(seasonsPerPage.toString());
        }

        if (decade) {
            currentQuery.decade = qs.parse(decade.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            dataPerPage: seasonsPerPage,
            decade: decade,
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

    const cleanFilters = () => {
        reset({
            dataPerPage: 12,
        });
        router.push('/seasons?page=0');
    }


    return (
        <>
            <form className='' onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col md:flex-row lg:flex-row items-center gap-8 pt-10'>
                    <div className='flex flex-col'>
                        <Controller
                            name="dataPerPage"
                            control={control}
                            render={({ field }) =>
                                <Select
                                    className='max-w-sm lg:max-w-lg lg:w-[20vw]'
                                    {...field}
                                    //@ts-ignore
                                    options={entriesOptions}
                                />
                            }
                        />
                        <h1 className='pt-5 text-sm text-neutral-500 font-semibold tracking-tight leading-none'>Seleccione la cantidad de pilotos que desea ver por página y haga click en aplicar filtros.</h1>
                    </div>
                    <div className='flex flex-col'>
                        <Controller
                            name="decade"
                            control={control}
                            render={({ field }) =>
                                <Select
                                    className='max-w-sm lg:max-w-lg lg:w-[20vw]'
                                    {...field}
                                    //@ts-ignore
                                    options={seasonsDecadesOptions}
                                    blurInputOnSelect
                                />
                            }
                        />
                        <h1 className='pt-5 text-sm text-neutral-500 font-semibold tracking-tight leading-none'>Seleccione la decada y haga click en aplicar filtros.</h1>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5 py-10'>
                    <input
                        type="submit"
                        value='Aplicar filtros'
                        className='text-base text-black font-light p-3 bg-transparent border border-black rounded-xl cursor-pointer transition md:text-lg lg:text-xl hover:bg-red-600 hover:text-white'
                    />
                    <Button
                        label='Limpiar Filtros'
                        onClick={cleanFilters}
                    />
                </div>
            </form>
        </>
    );
}

export default SeasonsFilter;