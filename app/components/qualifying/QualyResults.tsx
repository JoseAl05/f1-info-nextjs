import { getConstructorById } from '@/app/functions/getConstructors';
import { getDriverById } from '@/app/functions/getDrivers';
import { QualifyingResponse } from '@/app/types/QualifyingTypes';
import { BiSad } from 'react-icons/bi';

interface QualyResultsProps {
    qualy?: QualifyingResponse | null;
}

const QualyResults: React.FC<QualyResultsProps> = async ({ qualy }) => {


    const driverId = parseInt(qualy?.driverId);
    const constructorId = parseInt(qualy?.constructorId);


    const driver = await getDriverById({ driverId: driverId });
    const constructor = await getConstructorById({ constructorId: constructorId });

    return (
        <div className='flex flex-col items-center'>
            <p className='text-xl mt-6 font-bold'>{driver.driver?.forename} {driver.driver?.surname}</p>
            <p className='text-lg font-semibold'>{constructor.constructor?.name}</p>
            <p className='text-lg text-red-600 font-bold'>Posición: {qualy?.position}</p>
            <div className='border-[2px] border-[#2d4b80] rounded-xl p-5'>
                <p className='text-lg font-light'>
                    Q1 Time:
                    {
                        qualy?.q1 ?
                            (
                                <span className='font-bold text-green-800'> {qualy.q1}</span>
                            ) : (
                                <span className='text-red-600'> No Time</span>
                            )
                    }
                </p>
                <p className='text-lg font-light'>
                    Q2 Time:
                    {
                        qualy?.q2 ?
                            (
                                <span className='font-bold text-green-800'> {qualy.q2}</span>
                            ) : (
                                <span className='text-red-600'> No Time</span>
                            )
                    }
                </p>
                <p className='text-lg font-light'>
                    Q3 Time:
                    {
                        qualy?.q3 ?
                            (
                                <span className='font-bold text-green-800'> {qualy.q3}</span>
                            ) : (
                                <span className='text-red-600'> No Time</span>
                            )
                    }
                </p>
            </div>
        </div>
    );
}

export default QualyResults;