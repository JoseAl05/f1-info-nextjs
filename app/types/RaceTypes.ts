import { CircuitResponse } from './CircuitTypes';

export type RaceResponse = {
    raceId:number;
    year:number;
    round:number;
    circuitId:number;
    name:string;
    date:Date;
    time?:Date;
    url?:string;
    fp1_date?:Date;
    fp1_time?:Date;
    fp2_date?:Date;
    fp2_time?:Date;
    fp3_date?:Date;
    fp3_time?:Date;
    quali_date?:Date;
    quali_time?:Date;
    sprint_date?:Date;
    sprint_time?:Date;
    circuits?:CircuitResponse;
}