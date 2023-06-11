import { getConstructorById } from '@/app/functions/getConstructors';
import { ConstructorStandingsResponse } from '@/app/types/ConstructorStandingsTypes';

interface ConstructorStandingsColumnsProps {
    constructorStanding?: ConstructorStandingsResponse;
    constructorId?: number;
}

const ConstructorStandingsColumns: React.FC<ConstructorStandingsColumnsProps> = async({ constructorStanding,constructorId }) => {

    const constructor = await getConstructorById({constructorId:constructorId});

    return (
        <tr className='border-b'>
            <td className='px-6 py-4 border-r'>{constructor.constructor?.name}</td>
            <td className='px-6 py-4'>{constructorStanding?.positionText}</td>
            <td className='px-6 py-4'>{constructorStanding?.points}</td>
            <td className='px-6 py-4'>{constructorStanding?.wins}</td>
        </tr>
    );
}

export default ConstructorStandingsColumns;