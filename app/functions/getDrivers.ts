import prisma from '@/app/libs/prismadb';
import { DriverResponse } from '../types/DriverTypes';

export interface IDriverParams {
    driversPerPage: number;
    currentPage: number;
  }

export async function getDrivers(params:IDriverParams) {
  try {

    const {driversPerPage,currentPage} = params;

    const qDrivers = await prisma.drivers.count();

    const drivers = await prisma.drivers.findMany({
        skip:currentPage,
        take:driversPerPage,
        orderBy:{
            forename:'asc'
        }
    });

    return{
        drivers:drivers as DriverResponse[] | null,
        qDrivers:qDrivers as number | null,
    }

  } catch (error: any) {
    throw new Error(error.message);
  }
}
