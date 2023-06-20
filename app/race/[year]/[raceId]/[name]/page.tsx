import Container from '@/app/components/Container';
import QualyResults from '@/app/components/qualifying/QualyResults';
import RaceResults from '@/app/components/races/RaceResults';
import Standings from '@/app/components/standings/Standings';
import { getRaceById } from '@/app/functions/getRaces';
import { BiSad } from 'react-icons/bi';

interface RacePageParams {
    year: number | string;
    raceId: string;
    name?: string;
}

const RacePage = async ({ params }: { params: RacePageParams }) => {

    const { year, raceId, name } = params;
    const race = await getRaceById({ raceId: parseInt(raceId) });

    return (
        <Container>
            <div className='flex flex-col items-center pt-56 md:pt-48 lg:pt-48 pb-10'>
                <h1 className='text-black text-3xl font-bold text-center'>{name} Año {year}</h1>
                <h1 className='text-[#345ba0] text-3xl text-center font-bold pt-20'>Resultados Clasificación</h1>
                {
                    race.race?.qualifying.length !== 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-10'>
                            {
                                race.race?.qualifying.map((qualy) => {
                                    return (
                                        <QualyResults
                                            key={qualy.qualifyId}
                                            qualy={qualy}
                                        />
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div className='flex flex-col items-center gap-2 mt-10'>
                            <BiSad size={50} />
                            <p>No Data</p>
                        </div>
                    )
                }
            </div>
            <div className='flex flex-col items-center pb-10'>
                <h1 className='text-[#345ba0] text-3xl text-center font-bold pt-20'>Resultados Carrera</h1>
                {
                    race.race?.results.length !== 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-10'>
                            {
                                race?.race?.results.map((result) => {
                                    return (

                                        <RaceResults
                                            key={result.resultId}
                                            results={result}
                                        />
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div className='flex flex-col items-center gap-2 mt-10'>
                            <BiSad size={50} />
                            <p>No Data</p>
                        </div>
                    )
                }
            </div>
            <div className='flex flex-col md:flex-col md:justify-center lg:flex-row lg:justify-around gap-8 pb-10'>
                <Standings
                    constructorStandings={race.race!.constructorStandings}
                    driverStandings={race.race!.driverStandings}
                />
            </div>
        </Container>
    );
}

export default RacePage;