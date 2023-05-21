export type Circuit = {
  MRData: CircuitResponse;
};

export type CircuitResponse = {
  xmlns: string;
  series: string;
  limit: number;
  offset: number;
  total: number;
  CircuitTable:CircuitDriverData;
};

export type CircuitDriverData = {
  constructorId?: string;
  driverId?: string;
  Circuits:CircuitData[];
};

export type CircuitData = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location:CircuitLocation;
};

export type CircuitLocation = {
  lat: string;
  long: string;
  locality: string;
  country: string;
};

export type Image = {
  batchcomplete:string,
  query:ImageID
}

export type ImageID = {
  pageids:string[];
  pages?:ImagePage;
}

export type ImagePage = {
  [key?:number]:ImageData;
}

export type ImageThumbnail = {
  source?:string;
  width?:number;
  height?:number;
}

export type ImageOriginal = {
  source?:string;
  width?:number;
  height?:number
}

export type ImageData = {
  pageid?:number;
  ns:number;
  title?:string;
  thumbnail?:ImageThumbnail
  original?:ImageOriginal
}

