export type Season = {
    MRData: SeasonResponse;
};

export type SeasonResponse = {
    xmlns: string;
    series: string;
    limit: number;
    offset: number;
    total: number;
    SeasonTable: SeasonTable;
};

export type SeasonTable = {
    constructorId?: string;
    driverId?: string;
    Seasons: SeasonData[];
};

export type SeasonData = {
    season: string;
    url: string;
};

