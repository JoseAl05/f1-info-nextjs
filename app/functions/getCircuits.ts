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

    //Se separa el string en un arreglo de strings
    //Cada vez que se encuentre un espacio en blanco
    const arr = circuitCountry?.split(' ');
    //Se crea un loop por cada elemento del arreglo y se cambia la primera letra a mayúscula
    if(arr && arr.length !== undefined){
      for (let i = 0; i < arr?.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
    }

    //Se añaden todos los elementos del array a un nuevo string
    //Usando un espacio en blanco para separar cada palabra.
    const finalFilterString = arr?.join(' ');

    let query:any = {};

    //Si es que el usuario buscó el circuit por país
    //Se crea la query para obtener los circuitos filtrados.
    if (circuitCountry) {
      query.OR = [
        {
          name: finalFilterString,
        },
        {
          country: finalFilterString,
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
    })

    return {
      circuits: circuits,
      qCircuits: qCircuits as number,
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


