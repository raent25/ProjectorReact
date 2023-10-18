import PropTypes from "prop-types";
import { createContext } from "react";
import useWishList from "../hooks/useWishList.jsx";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [wishList, toggleFavorite] = useWishList();

  return (
    <FavoritesContext.Provider value={{ wishList, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node,
};

export { FavoritesContext, FavoritesProvider };
