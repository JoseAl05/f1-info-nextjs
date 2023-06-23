import prisma from '@/app/libs/prismadb';
import { RaceResponse } from '../types/RaceTypes';

export interface IRaceParams {
  racesPerPage: number;
  currentPage: number;
  year: number;
}

export interface IRaceByIdParams {
  raceId: number;
}

export interface IRacesByCircuitParams {
  racesPerPage: number;
  currentPage: number;
  circuitId: number;
}

export async function getRaces(params: IRaceParams) {
  try {
    const { racesPerPage, currentPage, year } = params;
    let query:any = {};

    //Si se seleccionó un año.
    //Se añade a la query.
    if (year) {
      query.year = year;
    }

    //Se obtiene la cantidad de carreras con el filtro aplicado.
    const qRaces = await prisma.races.count({
      where: query,
    });

    const races = await prisma.races.findMany({
      skip: currentPage,
      take: racesPerPage,
      where: query,
      orderBy: {
        round: 'asc',
      },
    });

    return {
      races: races,
      qRaces: qRaces as number,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getRaceById(params: IRaceByIdParams) {
  try {
    const { raceId } = params;

    let query:any = {};

    if (raceId) {
      query.raceId = raceId;
    }

    const race = await prisma.races.findUnique({
        where:query,
        include:{
            qualifying:true,
            results:true,
            driverStandings:{
              orderBy:{
                position:'asc'
              }
            },
            constructorStandings:{
              orderBy:{
                position:'asc'
              }
            },
        }
    })

    return {
        race: race
    }

  } catch (error: any) {
    throw new Error(error.message);
  }
}

//Funcion para obtener todas las carreras que se han disputado en el circuito seleccionado.
export async function getRacesByCircuit(params: IRacesByCircuitParams) {
  try {
    const { racesPerPage, currentPage, circuitId } = params;

    const racesPerCircuits = await prisma.circuits.findMany({
      where: {
        circuitId: circuitId,
      },
      include: {
        races: {
          skip: currentPage,
          take: racesPerPage,
        },
        _count: true,
      },
    });

    return {
      racesPerCircuit: racesPerCircuits[0].races,
      qRacesPerCircuit: racesPerCircuits[0]._count.races as number,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
