import Container from '../components/Container';
import DriverList from '../components/drivers/DriverList';
import DriversFilter from '../components/inputs/DriversFilter';
import { getDrivers } from '../functions/getDrivers';

const DriversPage = async({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

    const driversPerPage = searchParams.dataPerPage ? parseInt(searchParams.dataPerPage) : 12;
    const currentPage = parseInt(searchParams.page);
    const sortDriversByForename = searchParams.sortByLetter ? searchParams.sortByLetter : '';
    const driverForename = searchParams.driverForename ? searchParams.driverForename : null;
    const driverSurname = searchParams.driverSurname ? searchParams.driverSurname : null;

    const drivers = await getDrivers({currentPage:currentPage,driversPerPage:driversPerPage,sortByLetter:sortDriversByForename,driverForename:driverForename,driverSurname:driverSurname});

    return (
        <Container>
            <div className='flex flex-col items-stretch py-48 gap-5'>
                <h1 className='text-black text-3xl text-center font-bold'>Pilotos</h1>
                <DriversFilter />
                <DriverList
                    drivers={drivers.drivers}
                    qDrivers={drivers.qDrivers}
                />
            </div>
        </Container>
    );
}

export default DriversPage;