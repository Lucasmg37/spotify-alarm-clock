import { ISpotifyRequestPaginator } from "../services/interfaces/ISpotifyRequestPaginator";

enum TypeSearch {
  TRACK = "track",
  ARTIST = "artist",
  PLAYLIST = "playlist",
  ALBUM = "album",
}

interface ISearchDTO extends ISpotifyRequestPaginator {
  q: string;
  type: TypeSearch;
}

export { ISearchDTO, TypeSearch };
