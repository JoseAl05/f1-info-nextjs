export type Image = {
  batchcomplete: string;
  query: ImageID;
};

export type ImageID = {
  pageids: string[];
  pages?: ImagePage;
};

export type ImagePage = {
  [key?: number]: ImageData;
};

export type ImageThumbnail = {
  source?: string;
  width?: number;
  height?: number;
};

export type ImageOriginal = {
  source?: string;
  width?: number;
  height?: number;
};

export type ImageData = {
  pageid?: number;
  ns: number;
  title?: string;
  thumbnail?: ImageThumbnail;
  original?: ImageOriginal;
};
