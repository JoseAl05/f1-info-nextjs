import Container from '../components/Container';
import ConstructorList from '../components/constructors/ConstructorList';
import { getConstructors } from '../functions/getConstructors';

const ConstructorsPage = async({ searchParams }: { searchParams: { [key: string]: string } }) => {

    const constructorsPerPage = 12;
    const currentPage = parseInt(searchParams.page);

    const constructors = await getConstructors({currentPage:currentPage,constructorsPerPage:constructorsPerPage});

    return (
        <Container>
            <div className='flex flex-col items-center pt-56 md:pt-48 lg:pt-48'>
                <h1 className='text-black text-3xl font-bold'>Constructores</h1>
                <ConstructorList
                    constructors={constructors.teams}
                    qConstructors={constructors.qConstructors}
                />
            </div>
        </Container>
    );
}

export default ConstructorsPage;