'use client'

import Select from 'react-select';
import Button from '../buttons/Button';

interface YearSelectProps{
    value?:{
        value:string,
        label:string
    };
    onChange:(value:string | null) => void;
}

const YearSelect:React.FC<YearSelectProps> = ({value,onChange}) => {

    const currentYear = new Date().getFullYear();
    const yearArray = [];

    for (let i = 1950; i <= currentYear; i++) {
        yearArray.push({ value: i, label: i });
    }


    return (
        <div className='py-10'>
            <Select
                classNames={{
                    control: () => 'p-1 border-2',
                    input: () => 'text-lg',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6'
                    }
                })}
                placeholder='Seleccione un Año'
                isClearable
                value={value}
                onChange={(value) => onChange(value)}
                options={yearArray}
            />
        </div>
    );
}

export default YearSelect;