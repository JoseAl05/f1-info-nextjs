import prisma from '@/app/libs/prismadb';
import { RaceResponse } from '../types/RaceTypes';
import { Prisma } from '@prisma/client';

export interface ICircuitParams {
  circuitsPerPage: number;
  currentPage: number;
  circuitCountry?: string;
}

export interface IRacesByCircuitParams {
  racesPerPage: number;
  currentPage: number;
  circuitId: number;
}

export async function getCircuits(params: ICircuitParams) {
  try {
    const { circuitsPerPage, currentPage, circuitCountry } = params;

    let query: any = {};

    //Si es que el usuario buscó el circuit por país
    //Se crea la query para obtener los circuitos filtrados.
    if (circuitCountry) {
      if (circuitCountry !== 'all') {
        query.OR = [
          {
            name: circuitCountry,
          },
          {
            country: circuitCountry,
          },
        ];

        const qCircuits = await prisma.circuits.count({
          where: query,
        });
        const circuits = await prisma.circuits.findMany({
          skip: currentPage,
          take: circuitsPerPage,
          where: query,
          orderBy: {
            name: 'asc',
          },
        });
        return {
          circuits: circuits,
          qCircuits: qCircuits as number,
        };
      } else {

        //Cantidad de circuitos aplicando el filtro.
        const qCircuits = await prisma.circuits.count();

        const circuits = await prisma.circuits.findMany({
          skip: currentPage,
          take: circuitsPerPage,
          orderBy: {
            name: 'asc',
          },
        });

        return {
          circuits: circuits,
          qCircuits: qCircuits as number,
        };
      }
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}



export async function getCircuitsCountries() {
  try {
    const countries = await prisma.circuits.findMany({
      select: {
        country: true,
      },
    });

    return countries;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
