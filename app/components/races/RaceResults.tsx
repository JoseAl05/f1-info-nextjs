import { getConstructorById } from '@/app/functions/getConstructors';
import { getDriverById } from '@/app/functions/getDrivers';
import { getStatusById } from '@/app/functions/getStatus';
import { ResultsResponse } from '@/app/types/ResultTypes';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';

interface RaceResultsProps {
    results?: ResultsResponse;
}

const RaceResults: React.FC<RaceResultsProps> = async ({ results }) => {

    const driverId = parseInt(results?.driverId);
    const constructorId = parseInt(results?.constructorId);
    const statusId = parseInt(results?.statusId);

    const driver = await getDriverById({ driverId: driverId });
    const constructor = await getConstructorById({ constructorId: constructorId });
    const status = await getStatusById({ statusId: statusId });


    return (
        <div className='flex flex-col items-center'>
            <Link
                href={`/drivers/${driverId}/${driver.driver?.forename}-${driver.driver?.surname}`}
                className='text-xl font-bold whitespace-nowrap transition hover:text-blue-800 hover:underline'
                target='_blank'
            >
                {driver.driver?.forename} {driver.driver?.surname}
            </Link>
            <p className='text-white text-lg font-semibold border-x border-t bg-[#2d4b80] p-1'>{constructor.constructor?.name}</p>
            <div className='text-lg border-[2px] border-[#2d4b80] rounded-xl h-full whitespace-nowrap'>
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold tracking-tight leading-none'>Posicion de salida:</p>
                    <p className='text-green-600 font-bold'>{results?.grid}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold tracking-tight leading-none'>Posicion final:</p>
                    <p className='text-green-600 font-bold'>{results?.positionOrder}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold tracking-tight leading-none'>Vuelta rapida:</p>
                    <p className='text-green-600 font-bold'>{results?.fastestLapTime}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold tracking-tight leading-none'>Vueltas completadas:</p>
                    <p className='text-green-600 font-bold'>{results?.laps}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold tracking-tight leading-none'>Gap:</p>
                    {
                        results?.time ? (
                            <p className='text-green-600 font-bold'>{results?.time}</p>
                        ):(
                            <RxCross1 size={25} color='red'/>
                        )
                    }
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold tracking-tight leading-none'>Puntos:</p>
                    {
                        results?.points > 0 ? (
                            <p className='text-green-600 font-bold'>{results?.points}</p>
                        ) : (
                            <p className='text-red-600 font-bold'>{results?.points}</p>
                        )
                    }
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold tracking-tight leading-none'>Status:</p>
                    {
                        status?.status.status === 'Finished' ? (
                            <p className='text-green-600 font-bold'>{status?.status.status}</p>
                        ) : (
                            <p className='text-red-600 font-bold'>{status?.status.status}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default RaceResults;