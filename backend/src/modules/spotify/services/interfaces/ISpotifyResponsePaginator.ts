interface ISpotifyResponsePaginator {
  limit: number;
  next: string | null;
  offset: number;
  previus: string | null;
  total: number;
}

export { ISpotifyResponsePaginator };
