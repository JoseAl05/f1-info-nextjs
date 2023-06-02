import prisma from '@/app/libs/prismadb';
import { RaceResponse } from '../types/RaceTypes';

export interface IRaceParams {
  racesPerPage: number;
  currentPage: number;
  circuitId: string;
  year?: number;
}

export interface IRaceByIdParams {
  raceId: number;
}

export async function getRaces(params: IRaceParams) {
  try {
    const { racesPerPage, currentPage, circuitId, year } = params;
    let query = {};

    //Si se seleccionó un año.
    //Se añade a la query.
    if (year) {
      query.year = parseInt(year);
    }

    //Se obtiene la cantidad de carreras con el filtro aplicado.
    const qRaces = await prisma.races.count({
      where: query,
    });

    const races = await prisma.races.findMany({
      skip: currentPage,
      take: racesPerPage,
      where: query,
      include: {
        circuits: true,
      },
      orderBy: {
        round: 'asc',
      },
    });

    return {
      races: races as RaceResponse[] | null,
      qRaces: qRaces as number | null,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getRaceById(params: IRaceByIdParams) {
  try {
    const { raceId } = params;

    let query = {};

    if (raceId) {
      query.raceId = raceId;
    }

    const race = await prisma.races.findUnique({
        where:query,
        include:{
            qualifying:true,
            results:true
        }
    })

    if(!race?.qualifying){
      return null;
    }

    return {
        race: race as RaceResponse | null
    }

  } catch (error: any) {
    throw new Error(error.message);
  }
}
