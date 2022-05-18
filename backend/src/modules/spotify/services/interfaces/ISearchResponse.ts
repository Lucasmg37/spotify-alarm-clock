import { IImage } from "./IImage";
import { ISpotifyResponsePaginator } from "./ISpotifyResponsePaginator";

interface IArtist {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

interface IAlbum {
  album_type: "single" | "album" | "compilation" | "appears_on";
  artists: IArtist[];
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: IImage[];
  name: string;
  type: "album" | "single" | "track";
  uri: string;
  release_date: string;
  release_date_precision: "day" | "month" | "year";
  total_tracks: number;
}

interface ISearchTrackItem {
  album: IAlbum;
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  popularity: number;
  type: "track";
  uri: string;
}

interface ISearchArtistItem {
  external_urls: { spotify: string };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: IImage[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

interface IUser {
  display_name: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  type: "user";
  uri: string;
}

interface IPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: IImage[];
  name: string;
  owner: IUser;
  public: boolean | null;
  primary_color: string | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: "playlist";
  uri: string;
}

interface ITrackResponse extends ISpotifyResponsePaginator {
  items: ISearchTrackItem[];
  href: string;
}

interface IArtistResponse extends ISpotifyResponsePaginator {
  items: ISearchArtistItem[];
  href: string;
}

interface IAlbumResponse extends ISpotifyResponsePaginator {
  items: IAlbum[];
  href: string;
}

interface IPlaylistsResponse extends ISpotifyResponsePaginator {
  items: IPlaylist[];
  href: string;
}

interface ISearchResponse {
  tracks?: ITrackResponse;
  artists?: IArtistResponse;
  albums?: IAlbumResponse;
  playlists?: IPlaylistsResponse;
}

export { ISearchResponse };
