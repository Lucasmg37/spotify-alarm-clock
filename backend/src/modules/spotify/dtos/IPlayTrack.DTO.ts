interface IPlayTrackDTO {
  device_id: string;
  context_uri?: string;
  uris?: string[];
  offset?: {
    position: number;
  };
  position_ms?: number;
}

export { IPlayTrackDTO };
