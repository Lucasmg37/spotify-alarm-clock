"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ISearch = require("../../dtos/ISearch.DTO");

var _ISpotifyService = require("../../services/interfaces/ISpotifyService");

var _dec, _dec2, _dec3, _dec4, _class;

let SearchUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SpotifyService")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISpotifyService.ISpotifyService === "undefined" ? Object : _ISpotifyService.ISpotifyService]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class SearchUseCase {
  constructor(spotifyService) {
    this.spotifyService = spotifyService;
  }

  async execute({
    search,
    type = _ISearch.TypeSearch.PLAYLIST
  }) {
    const data = await this.spotifyService.search({
      q: search,
      type
    });
    let items = [];
    const paginator = {};

    if (type === _ISearch.TypeSearch.TRACK) {
      paginator.total = data.tracks.total;
      paginator.limit = data.tracks.limit;
      paginator.offset = data.tracks.offset;
      items = data.tracks.items.map(item => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri
        };
      });
    }

    if (type === _ISearch.TypeSearch.ARTIST) {
      paginator.total = data.artists.total;
      paginator.limit = data.artists.limit;
      paginator.offset = data.artists.offset;
      items = data.artists.items.map(item => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri
        };
      });
    }

    if (type === _ISearch.TypeSearch.ALBUM) {
      paginator.total = data.albums.total;
      paginator.limit = data.albums.limit;
      paginator.offset = data.albums.offset;
      items = data.albums.items.map(item => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri
        };
      });
    }

    if (type === _ISearch.TypeSearch.PLAYLIST) {
      paginator.total = data.playlists.total;
      paginator.limit = data.playlists.limit;
      paginator.offset = data.playlists.offset;
      items = data.playlists.items.map(item => {
        return {
          name: item.name,
          id: item.id,
          uri: item.uri
        };
      });
    }

    return {
      items,
      ...paginator
    };
  }

}) || _class) || _class) || _class) || _class);
exports.SearchUseCase = SearchUseCase;