import prisma from '@/app/libs/prismadb';
import { StatusResponse } from '../types/StatusType';

export interface IStatusParams {
  statusId?: number;
}

export async function getStatusById(params: IStatusParams) {
  try {
    const {statusId} = params;

    let query = {};

    if(statusId){
        query.statusId = statusId;
    }

    const status = await prisma.status.findUnique({
        where:query
    });

    if(!status){
        return null;
    }

    return {
        status:status as StatusResponse
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
