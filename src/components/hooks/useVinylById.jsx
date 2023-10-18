import useSWR from "swr";
import useGenreList from "./useGenreList.jsx";
import useCountryList from "./useCountryList.jsx";
import { useCallback, useMemo } from "react";
function useVinylById(id) {
  const vinyl = useSWR(id ? ["/api/releases", id] : null, () =>
    fetch("/api/releases/" + id)
      .then((response) => response.json())
      .then((data) => data.release)
  );
  const genreList = useGenreList();
  const countryList = useCountryList();

  const countries = useMemo(() => countryList.data ?? [], [countryList.data]);
  const genres = useMemo(() => genreList.data ?? [], [genreList.data]);

  const map = useCallback(
    (item) => {
      return {
        id: item.id,
        title: item.title,
        artist: item.artist,
        releaseDate: new Date(item.release_date),
        countries: countries.filter((country) =>
          item.all_countries.includes(country.id)
        ),
        genres: genres.filter((genre) => item.all_genres.includes(genre.id)),
        styles: item.styles,
        image: {
          normal: item.thumb_image,
          double: item.cover_image,
        },
        tracklist: item.tracklist,
      };
    },
    [countries, genres]
  );

  const isLoading =
    vinyl.isLoading || genreList.isLoading || countryList.isLoading;

  const data = useMemo(
    () => (!id || isLoading ? null : map(vinyl.data)),
    [id, isLoading, vinyl.data, map]
  );

  return {
    data,
    isLoading,
  };
}

export default useVinylById;
