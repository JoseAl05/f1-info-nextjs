import { ConstructorStandingsResponse } from '@/app/types/ConstructorStandingsTypes';
import { DriverStandingsResponse } from '@/app/types/DriverStandingsTypes';
import DriverStandingsTable from '../drivers/DriverStandingsTable';
import ConstructorStandingsTable from '../constructors/ConstructorStandingsTable';
import { BiSad } from 'react-icons/bi';
import { constructorStandings, driverStandings } from '@prisma/client';

interface StandingsProps {
    constructorStandings: constructorStandings[];
    driverStandings: driverStandings[];
}

const Standings: React.FC<StandingsProps> = ({ constructorStandings, driverStandings }) => {
    console.log(constructorStandings);
    return (
        <>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-[#345ba0] text-3xl font-bold pt-20'>Constructors Standings</h1>
                <div className='relative overflow-x-auto'>
                    {
                        constructorStandings ? (
                            <table className='table text-xs text-center md:text-lg lg:text-xl lg:text-left'>
                                <thead className='text-white uppercase bg-[#D72323]'>
                                    <tr>
                                        <th scope='col' className='md:px-3 lg:px-6 py-3 border-r border-white'>Constructor</th>
                                        <th scope='col' className='md:px-3 lg:px-6 py-3 border-r border-white'>Posicion</th>
                                        <th scope='col' className='md:px-3 lg:px-6 py-3 border-r border-white'>Puntos</th>
                                        <th scope='col' className='md:px-3 lg:px-6 py-3'>Victorias</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        constructorStandings.map((constructorStanding) => {
                                            return (
                                                <ConstructorStandingsTable
                                                    key={constructorStanding.constructorStandingsId}
                                                    constructorStanding={constructorStanding}
                                                    constructorId={constructorStanding.constructorId}
                                                />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        ) : (
                            <div className='flex flex-col items-center gap-2 mt-10'>
                                <BiSad size={50} />
                                <p>No Data</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-[#345ba0] text-3xl font-bold pt-20'>Driver Standings</h1>
                <div className='relative overflow-x-auto'>
                    {
                        driverStandings ? (
                            <table className='table text-xs text-center md:text-lg lg:text-xl lg:text-left'>
                                <thead className='text-white uppercase  bg-[#D72323]'>
                                    <tr>
                                        <th scope='col' className='md:px-3 lg:px-6 py-3 border-r border-white'>Driver</th>
                                        <th scope='col' className='md:px-3 lg:px-6 py-3 border-r border-white'>Posicion</th>
                                        <th scope='col' className='md:px-3 lg:px-6 py-3 border-r border-white'>Puntos</th>
                                        <th scope='col' className='px-6 py-3'>Victorias</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        driverStandings.map((driverStanding) => {
                                            return (
                                                <DriverStandingsTable
                                                    key={driverStanding.driverStandingsId}
                                                    driverStanding={driverStanding}
                                                    driverId={driverStanding.driverId}
                                                />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        ) : (
                            <div className='flex flex-col items-center gap-2 mt-10'>
                                <BiSad size={50} />
                                <p>No Data</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Standings;