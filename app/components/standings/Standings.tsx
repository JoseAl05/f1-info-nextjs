import { ConstructorStandingsResponse } from '@/app/types/ConstructorStandingsTypes';
import { DriverStandingsResponse } from '@/app/types/DriverStandingsTypes';
import DriverStandingsColumns from '../drivers/DriverStandingsColumns';
import ConstructorStandingsColumns from '../constructors/ConstructorStandingsColumns';
import { BiSad } from 'react-icons/bi';

interface StandingsProps {
    constructorStandings?: ConstructorStandingsResponse[];
    driverStandings?: DriverStandingsResponse[];
}

const Standings: React.FC<StandingsProps> = ({ constructorStandings, driverStandings }) => {
    return (
        <>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-[#345ba0] text-3xl font-bold pt-20'>Constructors Standings</h1>
                <div className='relative overflow-x-auto'>
                    {
                        constructorStandings ? (
                            <table className='w-full text-lg text-left'>
                                <thead className='text-white text-base uppercase bg-[#D72323]'>
                                    <tr>
                                        <th scope='col' className='px-6 py-3'>Constructor</th>
                                        <th scope='col' className='px-6 py-3'>Posicion</th>
                                        <th scope='col' className='px-6 py-3'>Puntos</th>
                                        <th scope='col' className='px-6 py-3'>Victorias</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        constructorStandings.map((constructorStanding) => {
                                            return (
                                                <ConstructorStandingsColumns
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
                            <table className='w-full text-lg text-left'>
                                <thead className='text-white text-base uppercase bg-[#D72323]'>
                                    <tr>
                                        <th scope='col' className='px-6 py-3'>Driver</th>
                                        <th scope='col' className='px-6 py-3'>Posicion</th>
                                        <th scope='col' className='px-6 py-3'>Puntos</th>
                                        <th scope='col' className='px-6 py-3'>Victorias</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        driverStandings.map((driverStanding) => {
                                            return (
                                                <DriverStandingsColumns
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