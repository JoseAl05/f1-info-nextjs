import { ConstructorResponse } from '@/app/types/ConstructorTypes';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FaFlagCheckered } from 'react-icons/fa';
import { GiCycle, GiPodium, GiRaceCar } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { TbNumbers, TbSquareNumber1 } from 'react-icons/tb';

interface ConstructorInfoProps {
    constructor?: ConstructorResponse;
}

const ConstructorInfo: React.FC<ConstructorInfoProps> = ({ constructor }) => {

    let totalPoints = 0;
    let totalLaps = 0;

    const constructorRacesHeld = constructor.constructor?.results.filter(result => result.raceId).length;
    const constructorWins = constructor.constructor?.results.filter(result => result.positionText === '1').length;
    const constructorPodiums = constructor.constructor?.results.filter(result => result.positionText === '1' || result.positionText === '2' || result.positionText === '3').length;
    const constructorPoles = constructor.constructor?.results.filter(result => result.grid === 1).length;
    const constructorPoints = constructor.constructor?.results.filter(result => result.points !== 0).map(points => points.points);
    const constructorLaps = constructor.constructor?.results.filter(result => result.laps !== 0).map(laps => laps.laps);
    const constructorRetirements = constructor.constructor?.results.filter(result => result.position === null).length;
    const constructorFastestLaps = constructor.constructor?.results.filter(result => result.rank === 1).length;


    for (let i = 0; i < constructorPoints.length; i++) {
        totalPoints = constructorPoints[i] + totalPoints;
    }

    for (let i = 0; i < constructorLaps.length; i++) {
        totalLaps = constructorLaps[i] + totalLaps;
    }


    return (
        <>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <FaFlagCheckered size={50} color='white' />
                <h2 className='text-lg text-center'>Carreras Disputadas</h2>
                <p className='text-lg'>
                    {constructorRacesHeld}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <AiOutlineTrophy size={50} color='white' />
                <h2 className='text-lg text-center'>Victorias</h2>
                <p className='text-lg'>
                    {constructorWins}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <GiPodium size={50} color='white' />
                <h2 className='text-lg text-center'>Podios</h2>
                <p className='text-lg'>
                    {constructorPodiums}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <TbSquareNumber1 size={50} color='white' />
                <h2 className='text-lg text-center'>Poles</h2>
                <p className='text-lg'>
                    {constructorPoles}
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
                    {constructorRetirements}
                </p>
            </div>
            <div className='flex flex-col items-center gap-5 text-white bg-[#D72323] p-3 rounded-lg'>
                <GiRaceCar size={50} color='white' />
                <h2 className='text-lg text-center'>Vueltas Rápidas</h2>
                <p className='text-lg'>
                    {constructorFastestLaps}
                </p>
            </div>
        </>
    );
}

export default ConstructorInfo;