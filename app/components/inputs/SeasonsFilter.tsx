'use client';

import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import qs from 'query-string';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Button from '../buttons/Button';
import { SeasonResponse } from '@/app/types/SeasonTypes';


type Inputs = {
    dataPerPage: string,
};

interface SeasonFilterProps {
    seasons?:SeasonResponse[];
}

const SeasonsFilter:React.FC<SeasonFilterProps> = ({seasons}) => {

    let currentQuery = {};

    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const seasonsDecadesOptions = [];

    for (let year = 1950; year <= 2020; year += 10) {
        const decade = Math.floor(year / 10) * 10;
        const label = `Década del ${decade}`;
        seasonsDecadesOptions.push({ value: year, label:label });
    }

    const entriesOptions = [
        { value: 24, label: "24 Entries" },
        { value: 48, label: "48 Entries" },
        { value: 60, label: "60 Entries" }
    ]


    const { control, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: {
            dataPerPage: 12,
            decade:null,
        }
    });

    const onSubmit: SubmitHandler<Inputs> = data => {

        const seasonsPerPage = Object.hasOwn(data.dataPerPage, 'value') ? data.dataPerPage.value : data.dataPerPage;
        const decade = data.decade ? data.decade.value : null;

        if (seasonsPerPage) {
            currentQuery.dataPerPage = qs.parse(seasonsPerPage.toString());
        }

        if(decade){
            currentQuery.decade = qs.parse(decade.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            dataPerPage: seasonsPerPage,
            decade:decade,
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
                <div className='flex flex-row items-center gap-8'>
                    <Controller
                        name="dataPerPage"
                        control={control}
                        render={({ field }) =>
                            <Select
                                className='max-w-lg w-[10vw]'
                                {...field}
                                options={entriesOptions}
                            />
                        }
                    />
                    <Controller
                        name="decade"
                        control={control}
                        render={({ field }) =>
                            <Select
                                className='max-w-lg w-[10vw]'
                                {...field}
                                options={seasonsDecadesOptions}
                            />
                        }
                    />
                </div>
                <div className='flex flex-row items-center gap-5 py-10'>
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
        </>
    );
}

export default SeasonsFilter;