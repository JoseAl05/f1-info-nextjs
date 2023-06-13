import { ResultsResponse } from './ResultTypes';

export type ConstructorResponse = {
    constructorId:number;
    constructorRef:string;
    name:string;
    nationality:string;
    url:string;
    results?:ResultsResponse[];
}