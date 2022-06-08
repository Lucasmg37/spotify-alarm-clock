export const getArtistsString = (artists: string[]): string => {
  return artists.map((artist) => artist).join(" | ");
};
