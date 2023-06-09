import { AiOutlineTrophy } from 'react-icons/ai';
import { GiPodium, GiRaceCar, GiCycle } from 'react-icons/gi';
import { TbSquareNumber1, TbNumbers } from 'react-icons/tb';
import { GrCycle } from 'react-icons/gr';
import { RxCross1 } from 'react-icons/rx';
import { FaFlagCheckered } from 'react-icons/fa';
import { DriverResponse } from '@/app/types/DriverTypes';
import { drivers, results } from '@prisma/client';

interface DriversInfoProps {
    driver: drivers;
    results?:results[]
}

const DriversInfo: React.FC<DriversInfoProps> = ({ driver,results }) => {


    let totalPoints = 0;
    let totalLaps = 0;

    const driverWins = results && results?.filter(result => result.positionText === '1').length;
    const driverPodiums = results && results?.filter(result => result.positionText === '1' || result.positionText === '2' || result.positionText === '3').length;
    const driverPoles = results && results?.filter(result => result.grid === 1).length;
    const driverPoints = results && results?.filter(result => result.points !== 0).map(points => points.points);
    const driverLaps = results && results?.filter(result => result.laps !== 0).map(laps => laps.laps);
    const driverRetirements = results && results?.filter(result => result.position === null).length;
    const driverFastestLaps = results && results?.filter(result => result.rank === 1).length;
    const driverRacesHeld = results && results?.filter(result => result.raceId).length;

    if(driverPoints?.length !== undefined){
        for (let i = 0; i < driverPoints.length; i++) {
            totalPoints = driverPoints[i] + totalPoints;
        }
    }

    if(driverLaps?.length !== undefined){
        for (let i = 0; i < driverLaps.length; i++) {
            totalLaps = driverLaps[i] + totalLaps;
        }
    }

    return (
        <>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <FaFlagCheckered size={50} color='white' />
                <h2 className='text-lg text-center'>Carreras Disputadas</h2>
                <p className='text-lg'>
                    {driverRacesHeld}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <AiOutlineTrophy size={50} color='white' />
                <h2 className='text-lg text-center'>Victorias</h2>
                <p className='text-lg'>
                    {driverWins}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <GiPodium size={50} color='white' />
                <h2 className='text-lg text-center'>Podios</h2>
                <p className='text-lg'>
                    {driverPodiums}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <TbSquareNumber1 size={50} color='white' />
                <h2 className='text-lg text-center'>Poles</h2>
                <p className='text-lg'>
                    {driverPoles}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <TbNumbers size={50} color='white' />
                <h2 className='text-lg text-center'>Puntos obtenidos</h2>
                <p className='text-lg'>
                    {totalPoints}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <GiCycle size={50} color='white' />
                <h2 className='text-lg text-center'>Vueltas Completadas</h2>
                <p className='text-lg'>
                    {totalLaps}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <RxCross1 size={50} color='white' />
                <h2 className='text-lg text-center'>Abandonos</h2>
                <p className='text-lg'>
                    {driverRetirements}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <GiRaceCar size={50} color='white' />
                <h2 className='text-lg text-center'>Vueltas Rápidas</h2>
                <p className='text-lg'>
                    {driverFastestLaps}
                </p>
            </div>
        </>
    );
}

export default DriversInfo;