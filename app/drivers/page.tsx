import Container from '../components/Container';
import DriverList from '../components/drivers/DriverList';
import DriversFilter from '../components/inputs/DriversFilter';
import { getDrivers, getDriversNationalities } from '../functions/getDrivers';

const DriversPage = async({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

    const driversPerPage = searchParams?.dataPerPage ? parseInt(searchParams?.dataPerPage!) : 12;
    const currentPage = parseInt(searchParams?.page!);
    const sortDriversByForename = searchParams?.sortByLetter ? searchParams?.sortByLetter! : '';
    const driverForename = searchParams?.driverForename ? searchParams?.driverForename! : null;
    const driverSurname = searchParams?.driverSurname ? searchParams?.driverSurname! : null;
    const nationality = searchParams?.nationality ? searchParams?.nationality! : null;

    const drivers = await getDrivers({currentPage:currentPage,driversPerPage:driversPerPage,sortByLetter:sortDriversByForename,driverForename:driverForename,driverSurname:driverSurname,nationality:nationality});
    const driversNationalities = await getDriversNationalities();

    return (
        <Container>
            <div className='flex flex-col items-stretch pt-56 md:pt-48 lg:pt-48 gap-5'>
                <h1 className='text-black text-3xl text-center font-bold'>Pilotos</h1>
                <DriversFilter
                    driversNationalites={driversNationalities}
                />
                <DriverList
                    drivers={drivers.drivers}
                    qDrivers={drivers.qDrivers}
                />
            </div>
        </Container>
    );
}

export default DriversPage;