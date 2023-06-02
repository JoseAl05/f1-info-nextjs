import { getConstructorById } from '@/app/functions/getConstructors';
import { getDriverById } from '@/app/functions/getDrivers';
import { getStatusById } from '@/app/functions/getStatus';
import { ResultsResponse } from '@/app/types/ResultTypes';
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
            <h1 className='text-xl font-bold whitespace-nowrap'>{driver.driver?.forename} {driver.driver?.surname}</h1>
            <p className='text-lg font-semibold'>{constructor.constructor?.name}</p>
            <div className='text-lg border-[2px] border-[#2d4b80] rounded-xl h-full whitespace-nowrap'>
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold'>Posicion de salida:</p>
                    <p className='text-green-600 font-bold'>{results?.grid}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold'>Posicion final:</p>
                    <p className='text-green-600 font-bold'>{results?.positionOrder}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold'>Vuelta rapida:</p>
                    <p className='text-green-600 font-bold'>{results?.fastestLapTime}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold'>Vueltas completadas:</p>
                    <p className='text-green-600 font-bold'>{results?.laps}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-start items-center gap-3 p-3'>
                    <p className='font-semibold'>Gap:</p>
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
                    <p className='font-semibold'>Puntos:</p>
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
                    <p className='font-semibold'>Status:</p>
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