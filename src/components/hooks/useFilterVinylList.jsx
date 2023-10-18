import useSWR from "swr";
import { useCollections } from "../Collection/useCollections.jsx";
import { useFavorites } from "../Favorites/useFavorites.jsx";
import useGenreList from "../hooks/useGenreList.jsx";
import useCountryList from "../hooks/useCountryList.jsx";
function createFilterParams(filter) {
  const params = new URLSearchParams();
  if (filter.artist) {
    params.set("artist", filter.artist);
  }
  if (filter.genre && filter.genre.length > 0) {
    filter.genre.split(",").forEach((item) => params.append("genre", item));
  }
  if (filter.country) {
    params.set("country", filter.country);
  }
  if (filter.decade) {
    params.set("year_from", parseInt(filter.decade, 10));
    params.set("year_to", parseInt(filter.decade, 10) + 9);
  }
  return params;
}
function useFilterVinylList(filter, { offset, limit }) {
  const genreList = useGenreList();
  const countryList = useCountryList();
  const { collection } = useCollections();
  const { wishList } = useFavorites();

  const params = createFilterParams(filter);
  params.set("offset", offset);
  params.set("limit", limit);
  const filterList = useSWR(
    ["/api/search", params.toString()],
    () =>
      fetch("/api/search?" + params.toString()).then((response) =>
        response.json()
      ),
    {
      suspense: true,
    }
  );
  if (countryList.isLoading || genreList.isLoading || filterList.isLoading) {
    return <h1>Loading...</h1>;
  }

  const results = filterList.data?.results.map((item) => {
    const vinyl = {
      ...item,
      country: countryList.data.find((country) => country.id === item.country)
        .title,
      genre: genreList.data.find((genre) => genre.id === item.genre),
      inCollection: collection.includes(item.id),
      inFavorites: wishList.includes(item.id),
    };
    return vinyl;
  });
  const isLoading = filterList.isLoading;
  const total = filterList.data?.total ?? 0;
  return {
    results: results,
    total,
    isLoading,
  };
}
export default useFilterVinylList;
