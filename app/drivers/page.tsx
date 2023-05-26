import Container from '../components/Container';
import DriverList from '../components/drivers/DriverList';
import { getDrivers } from '../functions/getDrivers';

const DriversPage = async({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

    const driversPerPage = 12;
    const currentPage = parseInt(searchParams.page);

    const drivers = await getDrivers({currentPage:currentPage,driversPerPage:driversPerPage});

    return (
        <Container>
            <div className='flex flex-col items-center py-48'>
                <h1 className='text-black text-3xl font-bold'>Pilotos</h1>
                <DriverList
                    drivers={drivers.drivers}
                    qDrivers={drivers.qDrivers}
                />
            </div>
        </Container>
    );
}

export default DriversPage;