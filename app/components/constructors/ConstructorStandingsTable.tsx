import { getConstructorById } from '@/app/functions/getConstructors';
import { ConstructorStandingsResponse } from '@/app/types/ConstructorStandingsTypes';
import { constructorStandings } from '@prisma/client';

interface ConstructorStandingsTableProps {
    constructorStanding: constructorStandings;
    constructorId:number;

}
//@ts-ignore
const ConstructorStandingsTable: React.FC<ConstructorStandingsTableProps> = async ({ constructorStanding,constructorId }) => {

    const constructor = await getConstructorById({ constructorId: constructorId });

    return (
        <tr className='border-b'>
            <td className='font-semibold px-6 py-4 border-r'>{constructor.team!.name}</td>
            <td className='px-6 py-4'>{constructorStanding?.positionText}</td>
            <td className='px-6 py-4'>{constructorStanding.points}</td>
            <td className='px-6 py-4'>{constructorStanding.wins}</td>
        </tr>
    );
}

export default ConstructorStandingsTable;