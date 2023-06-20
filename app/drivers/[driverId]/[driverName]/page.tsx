import Container from '@/app/components/Container';
import { getDriverById } from '@/app/functions/getDrivers';
import DriverImage from '@/app/components/drivers/DriverImage';
import DriversInfo from '@/app/components/drivers/DriversInfo';
import EmptyState from '@/app/components/emptyState/EmptyState';
import ConstructorsDrivenByDriver from '@/app/components/constructors/ConstructorsDrivenByDriver';
import Pagination from '@/app/components/pagination/Pagination';
import GoBackButton from '@/app/components/buttons/GoBackButton';

interface DriverPageParams {
    driverId: string;
    driverName: string;
}

const DriverPage = async ({ params }: { params: DriverPageParams }) => {

    const { driverId, driverName } = params;
    const formattedDriverId = parseInt(driverId);

    const driver = await getDriverById({ driverId: formattedDriverId });

    const constructorsId = !Array.isArray(driver.driver!) ? driver.driver!.results.map(result => result.constructorId) : [];

    return (
        <Container>
            <div className='flex flex-col items-center pt-48 pb-10'>
                {
                    !Array.isArray(driver.driver) &&
                    <>
                        <h1 className='text-black text-3xl font-bold'>{driver.driver?.forename} {driver.driver?.surname}</h1>
                        <div className='relative flex flex-row justify-between items-center py-5 gap-8 max-w-lg md:max-w-xl lg:max-w-2xl'>
                            <DriverImage
                                driver={driver.driver!}
                                grayscale={false}
                            />
                            <div className='flex flex-col items-center w-full'>
                                <div className='flex flex-row justify-center items-center gap-5'>
                                    <h1 className='text-sm lg:text-xl font-semibold'>
                                        Nacionalidad:
                                    </h1>
                                    {
                                        driver.driver?.nationality ? (
                                            <p className='text-sm lg:text-xl'>
                                                {driver.driver?.nationality}
                                            </p>
                                        ) : (
                                            <EmptyState />
                                        )
                                    }
                                </div>
                                <div className='flex flex-row justify-center items-center gap-5'>
                                    <h1 className='text-sm lg:text-xl font-semibold'>
                                        Numero:
                                    </h1>
                                    {
                                        driver.driver?.number ? (
                                            <p className='text-sm lg:text-xl'>
                                                {driver.driver?.number}
                                            </p>
                                        ) : (
                                            <EmptyState />
                                        )
                                    }
                                </div>
                                <div className='flex flex-row justify-center items-center gap-5'>
                                    <h1 className='text-sm lg:text-xl font-semibold'>
                                        Codigo Piloto:
                                    </h1>
                                    {
                                        driver.driver?.code ? (
                                            <p className='text-sm lg:text-xl'>
                                                {driver.driver?.code}
                                            </p>
                                        ) : (
                                            <EmptyState />
                                        )
                                    }

                                </div>
                                <a
                                    href={driver.driver?.url}
                                    rel='noreferrer'
                                    target='_blank'
                                    className='text-sm mx-auto font-semibold text-blue-400 transition hover:text-blue-700 lg:text-xl'
                                >
                                    Wikipedia
                                </a>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pt-10'>
                            <DriversInfo
                                driver={driver.driver!}
                                results={driver.results}
                            />
                        </div>
                        <h1 className='text-black text-3xl font-bold pt-10'>Detalle de la carrera de {driver.driver?.forename} {driver.driver?.surname}</h1>
                    </>
                }
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 pt-10'>
                    <ConstructorsDrivenByDriver
                        constructorsId={constructorsId}
                        driverId={formattedDriverId}
                    />
                </div>
                <GoBackButton
                    pathname='/drivers'
                    label='Lista de Pilotos'
                />
            </div>
        </Container>
    );
}

export default DriverPage;