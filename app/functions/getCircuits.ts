import prisma from '@/app/libs/prismadb';
import { CircuitResponse } from '../types/CircuitTypes';

export interface ICircuitParams {
  circuitsPerPage: number;
  currentPage: number;
  filter?: string;
}

export default async function getCircuits(params: ICircuitParams) {
  try {
    const { circuitsPerPage, currentPage, filter } = params;

    const qCircuits = await prisma.circuits.count();

    //Se separa el string en un arreglo de strings
    //Cada vez que se encuentre un espacio en blanco
    const arr = filter?.split(' ');
    //Se crea un loop por cada elemento del arreglo y se cambia la primera letra a mayúscula
    for (let i = 0; i < arr?.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //Se añaden todos los elementos del array a un nuevo string
    //Usando un espacio en blanco para separar cada palabra.
    const finalFilterString = arr?.join(' ');


    let query = {};

    if(circuitsPerPage){
      query.take = circuitsPerPage;
    } else {
      query.take = 10;
    }

    if(currentPage){
      query.skip = currentPage;
    } else {
      query.skip = 0;
    }

    if(filter){
      query.name = finalFilterString;
    } else {
      query.name = '';
    }

    if (filter) {
      const qFilteredCircuits = await prisma.circuits.count({
        where: {
          OR: [
            {
              name: query.name,
            },
            {
              country: query.name,
            },
          ],
        },
      });
      const circuits = await prisma.circuits.findMany({
        skip: query.skip,
        take: query.take,
        where: {
          OR: [
            {
              name: query.name,
            },
            {
              country: query.name,
            },
          ],
        },
        orderBy: {
          name: 'asc',
        },
      });

      return {
        circuits: circuits as CircuitResponse | null,
        qCircuits: qFilteredCircuits as number | null,
      };
    }

    const circuits = await prisma.circuits.findMany({
      skip: query.skip,
      take: query.take,
      orderBy: {
        name: 'asc',
      },
    });

    return {
      circuits: circuits as CircuitResponse | null,
      qCircuits: qCircuits as number | null,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
