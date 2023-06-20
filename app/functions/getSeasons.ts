import prisma from '@/app/libs/prismadb';
import { SeasonResponse } from '../types/SeasonTypes';

export interface ISeasonParams {
    seasonsPerPage: number;
    currentPage: number;
    decade:number | null;
}


export default async function getSeasons(params:ISeasonParams){
    try {
        const { seasonsPerPage, currentPage,decade} = params;
        let query:any = {};
        let formattedDecade = [];

        for (let i = decade; i! < decade! + 10; i!++) {
            formattedDecade.push(i);
        }

        if(decade){
            query.year = {
                in:formattedDecade,
            }
        }

        const qSeasons = await prisma.seasons.count({
            where:query
        });

        const seasons = await prisma.seasons.findMany({
            skip: currentPage,
            take: seasonsPerPage,
            where:query,
            orderBy: {
              year: 'asc',
            },
        })

        return{
            seasons: seasons,
            qSeasons: qSeasons as number,
        }


    } catch (error:any) {
        throw new Error(error.message);
    }
}