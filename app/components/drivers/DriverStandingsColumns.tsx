import { getDriverById } from '@/app/functions/getDrivers';
import { DriverStandingsResponse } from '@/app/types/DriverStandingsTypes';

interface DriverStandingsColumnsProps{
    driverStanding?:DriverStandingsResponse;
    driverId?:number;
}

const DriverStandingsColumns:React.FC<DriverStandingsColumnsProps> = async({driverStanding,driverId}) => {

    const driver = await getDriverById({driverId:driverId});
    
    return (
        <tr className='border-b'>
            <td className='px-6 py-4 border-r'>{driver.driver?.forename} {driver.driver?.surname}</td>
            <td className='px-6 py-4'>{driverStanding?.positionText}</td>
            <td className='px-6 py-4'>{driverStanding?.points}</td>
            <td className='px-6 py-4'>{driverStanding?.wins}</td>
        </tr>
    );
}

export default DriverStandingsColumns;