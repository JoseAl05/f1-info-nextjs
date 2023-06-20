import { getDriverById } from '@/app/functions/getDrivers';
import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import { constructors, results } from '@prisma/client';
import Link from 'next/link';

interface DriversDrivenForConstructorProps {
    team: constructors;
    results: results[];
}

//@ts-ignore
const DriversDrivenForConstructor: React.FC<DriversDrivenForConstructorProps> = async ({ team, results }) => {

    const driversId = results && results.map(result => result.driverId);

    const uniquesDriversIds: number[] = Array.from(new Set(driversId));


    const drivers = await getDriverById({ driverId: uniquesDriversIds });

    return (
        <>
            {
                Array.isArray(drivers.driver) && drivers.driver.map(driver => {
                    return (
                        <div key={driver.driverId} className='flex flex-col items-center gap-2'>
                            <Link
                                href={`/drivers/${driver.driverId}/${driver.forename}-${driver.surname}`}
                                className='text-xl text-[#354d77] font-semibold transition hover:scale-110 hover:underline'
                                target='_blank'
                            >
                                {driver.forename} {driver.surname}
                            </Link>
                        </div>
                    )
                })
            }

        </>
    );
}

export default DriversDrivenForConstructor;