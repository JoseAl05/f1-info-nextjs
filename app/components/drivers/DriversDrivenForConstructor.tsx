import { getDriverById } from '@/app/functions/getDrivers';
import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import Link from 'next/link';

interface DriversDrivenForConstructorProps {
    team?: ConstructorResponse;
}

const DriversDrivenForConstructor: React.FC<DriversDrivenForConstructorProps> = async ({ team }) => {

    const driversId = team?.results.map(result => result.driverId);

    const uniquesDriversIds = [...new Set(driversId)];

    const drivers = await getDriverById({ driverId: uniquesDriversIds });

    return (
        <>
            {
                drivers.driver.map(driver => {
                    return (
                        <div key={driver.driverId} className='flex flex-col items-center gap-2'>
                            <Link
                                href={`/drivers/${driver.driverId}/${driver.forename}-${driver.surname}`}
                                className='text-xl text-[#354d77] font-semibold transition hover:scale-110 hover:underline'
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