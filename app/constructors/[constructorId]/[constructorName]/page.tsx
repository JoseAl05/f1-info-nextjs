import Container from '@/app/components/Container';
import GoBackButton from '@/app/components/buttons/GoBackButton';
import ConstructorImage from '@/app/components/constructors/ConstructorImage';
import ConstructorInfo from '@/app/components/constructors/ConstructorInfo';
import DriversDrivenForConstructor from '@/app/components/drivers/DriversDrivenForConstructor';
import EmptyState from '@/app/components/emptyState/EmptyState';
import { getConstructorById } from '@/app/functions/getConstructors';

interface ConstructorPageParams {
    constructorId: string;
    constructorName: string;
}

const ConstructorPage = async ({ params }: { params: ConstructorPageParams }) => {

    const { constructorId, constructorName } = params;
    const formattedConstructorId = parseInt(constructorId);

    const constructor = await getConstructorById({ constructorId: formattedConstructorId });


    return (
        <Container>
            <div className='flex flex-col items-center pt-48 pb-10 gap-5'>
                <h1 className='text-black text-3xl font-bold'>{constructor.team!.name}</h1>
                <div className='relative flex flex-row justify-between items-center py-5 gap-8 max-w-lg md:max-w-xl lg:max-w-2xl'>
                    <ConstructorImage
                        team={constructor.team!}
                    />
                    <div className='flex flex-col items-center w-full'>
                        <div className='flex flex-row justify-center items-center gap-5'>
                            <h1 className='text-sm lg:text-xl font-semibold'>
                                Nacionalidad:
                            </h1>
                            {
                                constructor.team!.nationality ? (
                                    <p className='text-sm lg:text-xl'>
                                        {constructor.team!.nationality}
                                    </p>
                                ) : (
                                    <EmptyState />
                                )
                            }
                        </div>
                        <div className='flex flex-row justify-center items-center gap-5'>
                            <h1 className='text-sm lg:text-xl font-semibold'>
                                Constructor Code:
                            </h1>
                            {
                                constructor.team!.constructorRef ? (
                                    <p className='text-sm lg:text-xl'>
                                        {constructor.team!.constructorRef}
                                    </p>
                                ) : (
                                    <EmptyState />
                                )
                            }
                        </div>
                        <a
                            href={constructor.team!.url}
                            rel='noreferrer'
                            target='_blank'
                            className='text-sm mx-auto font-semibold text-blue-400 transition hover:text-blue-700 lg:text-xl'
                        >
                            Wikipedia
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pt-10'>
                    <ConstructorInfo
                        team={constructor.team!}
                        results={constructor.results}
                    />
                </div>
                <h1 className='text-black text-3xl font-bold pt-10'>Pilotos que han pilotado en {constructor.team!.name}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 pt-10'>
                    <DriversDrivenForConstructor
                        team={constructor.team!}
                        results={constructor.results}
                    />
                </div>
                <GoBackButton
                    pathname='/constructors'
                    label='Lista de Constructores'
                />
            </div>
        </Container>
    );
}

export default ConstructorPage;