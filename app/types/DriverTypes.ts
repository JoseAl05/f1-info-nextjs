import { ResultsResponse } from './ResultTypes';

export type DriverResponse = {
    driverId:number;
    driverRef:string;
    number?:number;
    code?:string;
    forename:string;
    surname:string;
    dob?:Date;
    nationality?:string;
    url:string;
    results:ResultsResponse[];
}