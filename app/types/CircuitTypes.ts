import { Prisma } from '@prisma/client';
import { getCircuits } from '../functions/getCircuits';
import { RaceResponse } from './RaceTypes';

export type CircuitResponse = {
    circuitId:string;
    circuitRef:string;
    name:string;
    country:string;
    location:string;
    alt:number;
    lat:number;
    lng:number;
    url:string;
    races:RaceResponse[];
}

