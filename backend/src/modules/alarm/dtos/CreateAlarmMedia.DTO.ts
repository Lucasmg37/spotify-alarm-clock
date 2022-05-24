class CreateAlarmMediaDTO {
  mediaType: "playlist" | "track" | "album" | "artist";
  mediaService: "spotify";
  references_ids: string[];
  volume: number;
}

export { CreateAlarmMediaDTO };
