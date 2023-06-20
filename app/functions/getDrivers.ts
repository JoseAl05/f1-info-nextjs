import prisma from '@/app/libs/prismadb';
import { DriverResponse } from '../types/DriverTypes';

export interface IDriverParams {
  driversPerPage: number;
  currentPage: number;
  sortByLetter?: string;
  driverForename?: string | null;
  driverSurname?: string | null;
}

export interface IDriverByIdParams {
  driverId: number | number[];
}

export async function getDrivers(params: IDriverParams) {
  try {
    const {
      driversPerPage,
      currentPage,
      sortByLetter,
      driverForename,
      driverSurname,
    } = params;

    let query:any = {};

    if (sortByLetter?.length !== 0) {
      query.forename = {
        startsWith: sortByLetter,
      };
    }
    if (driverForename) {
      query.forename = driverForename;
    }

    if (driverSurname) {
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
      drivers: drivers,
      qDrivers: qDrivers as number,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getDriverById(params: IDriverByIdParams) {
  try {
    const { driverId } = params;

    let query:any = {};

    if (driverId && !Array.isArray(driverId)) {

      query.driverId = driverId;

      const driver = await prisma.drivers.findUnique({
        where: query,
        include: {
          results: true,
        },
      });

      return {
        driver: driver,
        results: driver!.results,
        qResultsByDriver: driver!.results.length as number,
      };

    }

    query.driverId = {
      in: driverId,
    };

    const driver = await prisma.drivers.findMany({
      where: query,
      include:{
        results:true,
      }
    });
    return {
      driver: driver,
    };


  } catch (error: any) {
    throw new Error(error.message);
  }
}
