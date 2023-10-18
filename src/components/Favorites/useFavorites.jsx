import { useContext } from "react";
import { FavoritesContext } from "./FavoritesProvider.jsx";

export function useFavorites() {
  const { wishList, toggleFavorite } = useContext(FavoritesContext);

  return { wishList, toggleFavorite };
}
