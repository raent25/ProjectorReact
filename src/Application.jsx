import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import useGenreList from "./components/hooks/useGenreList.jsx";
import useCountryList from "./components/hooks/useCountryList.jsx";
import { FavoritesProvider } from "./components/Favorites/FavoritesProvider.jsx";
import { CollectionProvider } from "./components/Collection/CollectionProvider.jsx";
function Application() {
  const [searchParams] = useSearchParams();
  const genreList = useGenreList();
  const countryList = useCountryList();
  const filter = {
    artist: searchParams.has("artist") ? searchParams.get("artist") : "",
    genre: searchParams.has("genre") ? searchParams.get("genre") : "",
    decade: searchParams.has("decade") ? searchParams.get("decade") : "",
    country: searchParams.has("country") ? searchParams.get("country") : "",
  };

  if (countryList.isLoading || genreList.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="main">
      <Header />
      <CollectionProvider>
        <FavoritesProvider>
          <Outlet
            context={{
              filter,
            }}
          />
        </FavoritesProvider>
      </CollectionProvider>
    </div>
  );
}
export default Application;
