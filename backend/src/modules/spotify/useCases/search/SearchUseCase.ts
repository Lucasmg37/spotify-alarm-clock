import { inject, injectable } from "tsyringe";

import { IAppPaginatorResponse } from "../../../../shared/interfaces/IAppPaginatorResponse";
import { TypeSearch } from "../../dtos/ISearch.DTO";
import { ISpotifyService } from "../../services/interfaces/ISpotifyService";

interface IRequest {
  search: string;
  type?: TypeSearch;
}

interface IResponse extends IAppPaginatorResponse {
  items: {
    name: string;
    id: string;
    uri: string;
    images: string;
    artists?: string[];
    album?: string;
  }[];
}

@injectable()
class SearchUseCase {
  constructor(
    @inject("SpotifyService")
    private spotifyService: ISpotifyService
  ) {}

  async execute({
    search,
    type = TypeSearch.PLAYLIST,
  }: IRequest): Promise<IResponse> {
    const data = await this.spotifyService.search({
      q: search,
      type,
    });

    let items = [];
    const paginator = {} as IAppPaginatorResponse;

    if (type === TypeSearch.TRACK) {
      paginator.total = data.tracks.total;
      paginator.limit = data.tracks.limit;
      paginator.offset = data.tracks.offset;

      items = data.tracks.items.map((item) => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri,
          image: item.album.images[0].url,
          artists: item.artists.map((artist) => artist.name),
          album: item.album.name,
        };
      });
    }

    if (type === TypeSearch.ARTIST) {
      paginator.total = data.artists.total;
      paginator.limit = data.artists.limit;
      paginator.offset = data.artists.offset;

      items = data.artists.items.map((item) => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri,
          image: item.images[0]?.url,
        };
      });
    }

    if (type === TypeSearch.ALBUM) {
      paginator.total = data.albums.total;
      paginator.limit = data.albums.limit;
      paginator.offset = data.albums.offset;

      items = data.albums.items.map((item) => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri,
          image: item.images[0].url,
        };
      });
    }

    if (type === TypeSearch.PLAYLIST) {
      paginator.total = data.playlists.total;
      paginator.limit = data.playlists.limit;
      paginator.offset = data.playlists.offset;

      items = data.playlists.items.map((item) => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri,
          image: item.images[0].url,
        };
      });
    }

    return {
      items,
      ...paginator,
    };
  }
}

export { SearchUseCase };
