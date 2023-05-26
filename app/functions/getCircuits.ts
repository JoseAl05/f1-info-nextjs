import prisma from '@/app/libs/prismadb';
import { CircuitResponse } from '../types/CircuitTypes';
import { RaceResponse } from '../types/RaceTypes';

export interface ICircuitParams {
  circuitsPerPage: number;
  currentPage: number;
  circuitCountry?: string;
}

export interface IRacesByCircuitParams {
  racesPerPage: number;
  currentPage: number;
  circuitId?: string;
}

export async function getCircuits(params: ICircuitParams) {
  try {
    const { circuitsPerPage, currentPage, circuitCountry } = params;

    //Se separa el string en un arreglo de strings
    //Cada vez que se encuentre un espacio en blanco
    const arr = circuitCountry?.split(' ');
    //Se crea un loop por cada elemento del arreglo y se cambia la primera letra a mayúscula
    for (let i = 0; i < arr?.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //Se añaden todos los elementos del array a un nuevo string
    //Usando un espacio en blanco para separar cada palabra.
    const finalFilterString = arr?.join(' ');

    let query = {};

    //Si es que el usuario buscó el circuit por país
    //Se crea la query para obtener los circuitos filtrados.
    if (circuitCountry) {
      query.OR = [
        {
          name: circuitCountry,
        },
        {
          country: circuitCountry,
        },
      ];
    }

    //Cantidad de circuitos aplicando el filtro.
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
      circuits: circuits as CircuitResponse[] | null,
      qCircuits: qCircuits as number | null,
    };
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
        circuitId: parseInt(circuitId),
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
      racesPerCircuit: racesPerCircuits[0].races as RaceResponse | null,
      qRacesPerCircuit: racesPerCircuits[0]._count.races as number | null,
    };

  } catch (error: any) {
    throw new Error(error.message);
  }
}
