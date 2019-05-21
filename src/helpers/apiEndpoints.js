const LOCALHOST_URI = "http://localhost:5010/v1";

const PROD_URI = "https://api.bejebeje.com/v1";

const API_ROOT_URI =
  process.env.NODE_ENV === "development" ? LOCALHOST_URI : PROD_URI;

export const API_CONSTANTS = {
  artists: `${API_ROOT_URI}/artists`,
  singleArtist: slug => `${API_ROOT_URI}/artists/${slug}`,
  artistLyrics: slug => `${API_ROOT_URI}/artists/${slug}/lyrics`,
  singleLyric: (artistSlug, lyricSlug) =>
    `${API_ROOT_URI}/artists/${artistSlug}/lyrics/${lyricSlug}`,
  image: slug => `${API_ROOT_URI}/artists/${slug}/image`
};
