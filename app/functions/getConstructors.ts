import prisma from '@/app/libs/prismadb';
import { ConstructorResponse } from '../types/ConstructorTypes';

export interface IConstructorParams {
    constructorsPerPage: number;
    currentPage: number;
  }

export async function getConstructors(params:IConstructorParams) {
  try {

    const {constructorsPerPage,currentPage} = params;

    const qConstructors = await prisma.constructors.count();

    const constructors = await prisma.constructors.findMany({
        skip:currentPage,
        take:constructorsPerPage,
        orderBy:{
            name:'asc'
        }
    });

    return{
        constructors:constructors as ConstructorResponse[] | null,
        qConstructors:qConstructors as number | null,
    }

  } catch (error: any) {
    throw new Error(error.message);
  }
}
