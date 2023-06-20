import { getConstructorResultsByDriverAndConstructorId } from '@/app/functions/getConstructors';
import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import { DriverResponse } from '@/app/types/DriverTypes';
import { ResultsResponse } from '@/app/types/ResultTypes';
import Link from 'next/link';

interface ConstructorsDrivenByDriverProps {
    constructorsId: number[];
    driverId: number;
}
//@ts-ignore
const ConstructorsDrivenByDriver: React.FC<ConstructorsDrivenByDriverProps> = async ({ constructorsId, driverId }) => {

    const constructors = await getConstructorResultsByDriverAndConstructorId({ constructorId: constructorsId, driverId: driverId });

    let totalPointsWithConstructors = 0;
    let totalPointsWithConstructorsArray: number[] = []

    let totalLapsWithConstructors = 0;
    let totalLapsWithConstructorsArray: number[] = [];


    const racesWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.raceId).length
    });

    const winsWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.positionText === '1').length;
    });

    const podiumsWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.positionText === '1' || result.positionText === '2' || result.positionText === '3').length;
    });

    const polesWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.grid === 1).length;
    });

    const pointsWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.points !== 0).map(points => points.points);
    });

    const lapsWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.laps !== 0).map(laps => laps.laps);
    })

    const retirementsWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.position === null).length;
    })

    const fastestLapsWithConstructors = constructors.team.map((constructor) => {
        return constructor.results.filter(result => result.rank === 1).length;
    })



    for (let i = 0; i < pointsWithConstructors.length; i++) {


        for (let z = 0; z < pointsWithConstructors[i].length; z++) {
            totalPointsWithConstructors = pointsWithConstructors[i][z] + totalPointsWithConstructors;
        }


        totalPointsWithConstructorsArray.push(totalPointsWithConstructors);
        totalPointsWithConstructors = 0;
    }



    for (let i = 0; i < lapsWithConstructors.length; i++) {


        for (let z = 0; z < lapsWithConstructors[i].length; z++) {
            totalLapsWithConstructors = lapsWithConstructors[i][z] + totalLapsWithConstructors;
        }


        totalLapsWithConstructorsArray.push(totalLapsWithConstructors);
        totalLapsWithConstructors = 0;
    }



    return (
        <>
            {
                constructors.team.map((constructor, index) => {
                    return (
                        <div key={constructor.constructorId} className='flex flex-col items-center gap-2'>
                            <Link
                                href={`/constructors/${constructor.constructorId}/${constructor.name}`}
                                className='text-3xl text-[#354d77] font-semibold transition hover:scale-110 hover:underline'
                                target='_blank'
                            >
                                {constructor.name}
                            </Link>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Carreras disputadas:</h2>
                                {
                                    racesWithConstructors[index] !== 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{racesWithConstructors[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{racesWithConstructors[index]}</p>
                                    )
                                }
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Victorias:</h2>
                                {
                                    winsWithConstructors[index] !== 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{winsWithConstructors[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{winsWithConstructors[index]}</p>
                                    )
                                }
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Podios:</h2>
                                {
                                    podiumsWithConstructors[index] !== 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{podiumsWithConstructors[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{podiumsWithConstructors[index]}</p>
                                    )
                                }
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Poles:</h2>
                                {
                                    polesWithConstructors[index] !== 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{polesWithConstructors[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{polesWithConstructors[index]}</p>
                                    )
                                }
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Vueltas completadas:</h2>
                                {
                                    totalLapsWithConstructorsArray[index] !== 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{totalLapsWithConstructorsArray[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{totalLapsWithConstructorsArray[index]}</p>
                                    )
                                }
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Puntos obtenidos:</h2>
                                {
                                    totalPointsWithConstructorsArray[index] !== 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{totalPointsWithConstructorsArray[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{totalPointsWithConstructorsArray[index]}</p>
                                    )
                                }
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Abandonos:</h2>
                                {
                                    retirementsWithConstructors[index] === 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{retirementsWithConstructors[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{retirementsWithConstructors[index]}</p>
                                    )
                                }
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <h2 className='text-xl text-neutral-600 tracking-tight leading-none'>Vueltas Rápidas:</h2>
                                {
                                    fastestLapsWithConstructors[index] !== 0 ? (
                                        <p className='text-base font-semibold text-green-700'>{fastestLapsWithConstructors[index]}</p>
                                    ) : (
                                        <p className='text-base font-semibold text-red-700'>{fastestLapsWithConstructors[index]}</p>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ConstructorsDrivenByDriver;