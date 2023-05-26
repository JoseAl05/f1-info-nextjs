import prisma from '@/app/libs/prismadb';
import { SeasonResponse } from '../types/SeasonTypes';

export interface ISeasonParams {
    seasonsPerPage: number;
    currentPage: number;
}


export default async function getSeasons(params:ISeasonParams){
    try {
        const { seasonsPerPage, currentPage} = params;
        let query = {};

        if(seasonsPerPage){
            query.take = seasonsPerPage;
        } else {
            query.take = 10;
        }

        if(currentPage){
            query.skip = currentPage;
        } else {
            query.skip = 0;
        }

        const qSeasons = await prisma.seasons.count();

        const seasons = await prisma.seasons.findMany({
            skip: query.skip,
            take: query.take,
            orderBy: {
              year: 'asc',
            },
        })

        return{
            seasons: seasons as SeasonResponse[] | null,
            qSeasons: qSeasons as number | null,
        }


    } catch (error:any) {
        throw new Error(error.message);
    }
}