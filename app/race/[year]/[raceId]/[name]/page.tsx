import Container from '@/app/components/Container';
import QualyResults from '@/app/components/qualifying/QualyResults';
import RaceResults from '@/app/components/races/RaceResults';
import { getRaceById } from '@/app/functions/getRaces';
import { BiSad } from 'react-icons/bi';

interface RacePageParams {
    year?: number;
    raceId?: string;
    name?: string;
}

const RacePage = async ({ params }: { params: RacePageParams }) => {

    const { year, raceId, name } = params;
    const race = await getRaceById({ raceId: parseInt(raceId) });

    return (
        <Container>
            <div className='flex flex-col items-center pt-48 pb-10'>
                <h1 className='text-black text-3xl font-bold'>{name} Año {year}</h1>
                <h1 className='text-[#345ba0] text-3xl font-bold pt-20'>Resultados Clasificación</h1>
                {
                    race.race?.qualifying.length !== 0 ? (
                        <div className='grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10'>
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
                <h1 className='text-[#345ba0] text-3xl font-bold pt-20'>Resultados Carrera</h1>
                {
                    race?.race?.results.length !== 0 ? (
                        <div className='grid mt-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-7 md:gap-10'>
                            {
                                race?.race?.results.map((result) => {
                                    return(
                                        <RaceResults
                                            key={result.resultId}
                                            results={result}
                                        />
                                    )
                                })
                            }
                        </div>
                    ):(
                        <div className='flex flex-col items-center gap-2 mt-10'>
                            <BiSad size={50} />
                            <p>No Data</p>
                        </div>
                    )
                }
            </div>
        </Container>
    );
}

export default RacePage;