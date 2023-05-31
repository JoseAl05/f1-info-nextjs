import prisma from '@/app/libs/prismadb';
import { DriverResponse } from '../types/DriverTypes';

export interface IDriverParams {
  driversPerPage: number;
  currentPage: number;
  sortByLetter?: string;
  driverForename?: string | null;
  driverSurname?: string | null;
}

export async function getDrivers(params: IDriverParams) {
  try {
    const { driversPerPage, currentPage, sortByLetter, driverForename , driverSurname} = params;

    let query = {};

    if (sortByLetter?.length !== 0) {
      query.forename = {
        startsWith: sortByLetter,
      };
    }
    if (driverForename) {
      query.forename = driverForename;
    }

    if(driverSurname){
      query.surname = driverSurname;
    }

    const qDrivers = await prisma.drivers.count({
      where: query,
    });
    const drivers = await prisma.drivers.findMany({
      skip: currentPage,
      take: driversPerPage,
      where: query,
      orderBy: {
        forename: 'asc',
      },
    });

    return {
      drivers: drivers as DriverResponse[] | null,
      qDrivers: qDrivers as number | null,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
