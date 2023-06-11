export type DriverStandingsResponse = {
    driverStandingsId:number;
    raceId:number;
    driverId:number;
    points:number;
    position?:number;
    positionText?:string;
    wins:number;
}