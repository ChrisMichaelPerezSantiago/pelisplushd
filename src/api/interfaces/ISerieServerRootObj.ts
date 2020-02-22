interface Server{
  name: string;
  url: string;
};

interface Episode{
  episode: number;
  title: string;
  previewImage: string;
  synopsis: string;
  servers: Server[];
};

export interface ISerieServerRootObj{
  season: number;
  episodes: Episode[];
};