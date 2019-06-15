const LOCALHOST_URI = "http://localhost:5010";

const PROD_URI = "https://api.bejebeje.com";

const API_ROOT_URI =
  process.env.NODE_ENV === "development" ? LOCALHOST_URI : PROD_URI;

export const API_CONSTANTS = {
  artists: `${API_ROOT_URI}/artists`,
  singleArtist: slug => `${API_ROOT_URI}/artists/${slug}`,
  searchArtists: term => `${API_ROOT_URI}/artists?name=${term}`,
  artistLyrics: slug => `${API_ROOT_URI}/artists/${slug}/lyrics`,
  singleLyric: (artistSlug, lyricSlug) =>
    `${API_ROOT_URI}/artists/${artistSlug}/lyrics/${lyricSlug}`,
  image: slug => `${API_ROOT_URI}/artists/${slug}/image`
};
