import prisma from '@/app/libs/prismadb';
import { StatusResponse } from '../types/StatusType';

export interface IStatusParams {
  statusId: number;
}

export async function getStatusById(params: IStatusParams) {
  try {
    const {statusId} = params;

    let query:any = {};

    if(statusId){
        query.statusId = statusId;
    }

    const status = await prisma.status.findUnique({
        where:query
    });

    return {
        status:status
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
