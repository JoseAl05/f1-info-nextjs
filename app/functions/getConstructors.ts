import prisma from '@/app/libs/prismadb';
import { ConstructorResponse } from '../types/ConstructorTypes';

export interface IConstructorParams {
  constructorsPerPage: number;
  currentPage: number;
}

export interface IContructorByIdParams {
  constructorId: number | number[];
}

export interface IConstructorResultsByDriverAndConstructorIdParams {
  constructorId: number[];
  driverId: number;
}

export async function getConstructors(params: IConstructorParams) {
  try {
    const { constructorsPerPage, currentPage } = params;

    const qConstructors = await prisma.constructors.count();

    const constructors = await prisma.constructors.findMany({
      skip: currentPage,
      take: constructorsPerPage,
      orderBy: {
        name: 'asc',
      },
    });

    return {
      teams: constructors,
      qConstructors: qConstructors as number,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getConstructorById(params: IContructorByIdParams) {
  try {
    const { constructorId } = params;

    let query:any = {};

    query.constructorId = constructorId;

    const constructor = await prisma.constructors.findUnique({
      where: query,
      include: {
        results: true,
      },
    });

    return {
      team: constructor,
      results:constructor!.results
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getConstructorResultsByDriverAndConstructorId(
  params: IConstructorResultsByDriverAndConstructorIdParams
) {
  try {
    const { constructorId, driverId } = params;

    let query:any = {};
    let queryResults:any = {};

    if (Array.isArray(constructorId)) {
      query.constructorId = {
        in: constructorId,
      };
    } else {
      query.constructorId = constructorId;
    }

    if (driverId && Array.isArray(constructorId)) {
      queryResults.constructorId = {
        in: constructorId,
      };
      queryResults.driverId = driverId;
    }

    const constructor = await prisma.constructors.findMany({
      where: query,
      include: {
        results: {
          where: {
            AND: [queryResults],
          },
        },
      },
    });
    return {
      team: constructor,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
