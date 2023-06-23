'use client'

import Select from "react-select";
import qs, { ParsedQuery } from 'query-string';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from '../buttons/Button';

type Inputs = {
    country: string,
};

type Query = {
    country?: ParsedQuery<string>,
}

type CircuitsCountriesOptions = {
    value: string | null,
    label: string | null
}

interface CountrySelectProps {
    countries: {
        country: string | null;
    }[];
}


const CountrySelect: React.FC<CountrySelectProps> = ({ countries }) => {

    let currentQuery: Query = {};

    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const { control, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: {
            country: 'all'
        }
    });


    // const countriesOptions: CircuitsCountriesOptions[] = countries.map(country => {
    //     return {
    //         value: country.country,
    //         label: country.country
    //     }
    // })

    const uniqueCountries = Array.from(new Set(countries.map(country => country.country)));

    const countriesOptions : CircuitsCountriesOptions[] = uniqueCountries.map(country => {
        return{
            value:country,
            label:country
        }
    })


    const onSubmit: SubmitHandler<Inputs> = data => {

        let country = '';

        if (typeof data.country !== 'string') {
            country = data.country['value'];

        } else {
            country = data.country;
        }

        if (country) {
            currentQuery.country = qs.parse(country.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            country: country,
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
            country: 'all',
        });
        router.push('/circuits?page=0');
    }



    return (
        <>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col md:flex-row lg:flex-row items-center gap-8 pt-10'>
                    <div className='flex flex-col'>
                        <Controller
                            name="country"
                            control={control}
                            render={({ field }) =>
                                <Select
                                    className='max-w-sm lg:max-w-lg lg:w-[20vw]'
                                    {...field}
                                    //@ts-ignore
                                    options={countriesOptions}
                                />
                            }
                        />
                        <h1 className='pt-5 text-sm text-neutral-500 font-semibold tracking-tight leading-none'>Seleccione un país.</h1>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5 py-10'>
                    <input
                        type="submit"
                        value='Aplicar filtros'
                        className='text-base text-black font-light p-3 bg-transparent border border-black rounded-xl cursor-pointer transition md:text-lg lg:text-xl hover:bg-red-600 hover:text-white'
                    />
                    <Button
                        label='Limpiar filtros'
                        onClick={cleanFilters}
                    />
                </div>
            </form>
        </>
    );
}

export default CountrySelect;