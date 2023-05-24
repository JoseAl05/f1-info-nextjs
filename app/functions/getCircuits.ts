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

    //split the above string into an array of strings
    //whenever a blank space is encountered

    const arr = filter?.split(' ');

    //loop through each element of the array and capitalize the first letter.

    for (let i = 0; i < arr?.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    const finalFilterString = arr?.join(' ');


    let query = {};

    if (filter) {
      console.log(finalFilterString);
      const qFilteredCircuits = await prisma.circuits.count({
        where: {
          OR: [
            {
              name: finalFilterString,
            },
            {
              location: finalFilterString,
            },
            {
              country: finalFilterString,
            },
          ],
        },
      });
      const circuits = await prisma.circuits.findMany({
        skip: currentPage,
        take: circuitsPerPage,
        where: {
          OR: [
            {
              name: finalFilterString,
            },
            {
              location: finalFilterString,
            },
            {
              country: finalFilterString,
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
      skip: currentPage,
      take: circuitsPerPage,
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
