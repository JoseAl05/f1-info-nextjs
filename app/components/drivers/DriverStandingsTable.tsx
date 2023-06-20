import { getDriverById } from '@/app/functions/getDrivers';
import { DriverStandingsResponse } from '@/app/types/DriverStandingsTypes';
import { driverStandings } from '@prisma/client';

interface DriverStandingsTableProps {
    driverStanding: driverStandings;
    driverId: number;
}

//@ts-ignore
const DriverStandingsTable: React.FC<DriverStandingsTableProps> = async ({ driverStanding, driverId }) => {


    const driver = await getDriverById({ driverId: driverId });

    return (
        <tr className='border-b'>
            {
                !Array.isArray(driver.driver) &&
                <td className='font-semibold px-6 py-4 border-r'>
                    {driver.driver!.forename} {driver.driver!.surname}
                </td>
            }
            <td className='px-6 py-4'>{driverStanding?.positionText}</td>
            <td className='px-6 py-4'>{driverStanding?.points}</td>
            <td className='px-6 py-4'>{driverStanding?.wins}</td>
        </tr>
    );
}

export default DriverStandingsTable;