'use client';

import Pagination from '../pagination/Pagination';
import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import ConstructorCard from './ConstructorCard';

interface ConstructorListProps {
    constructors?: ConstructorResponse[];
    qConstructors?: number;
}

const ConstructorList: React.FC<ConstructorListProps> = ({ constructors, qConstructors }) => {

    const constructorsPerPage = 12;

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-10'>
                {constructors?.map((constructor) => {
                    return (
                        <ConstructorCard
                            key={constructor.constructorId}
                            constructor={constructor}
                            constructorsPerPage={constructorsPerPage}
                        />
                    )
                })}
            </div>
            <Pagination
                count={qConstructors}
                dataPerPage={constructorsPerPage}
                currentPathname='/constructors'
            />
        </>
    );
}

export default ConstructorList;