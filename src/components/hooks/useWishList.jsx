import { useState, useEffect, useCallback } from "react";
function getFavorite() {
  let wishList = window.localStorage.getItem("wishList");
  if (wishList) {
    return JSON.parse(wishList);
  }
  return [];
}
function setFavorite(item) {
  window.localStorage.setItem("wishList", JSON.stringify(item));
}
function useWishList() {
  const [wishList, setWishList] = useState(() => getFavorite());
  const toggleFavorite = useCallback(
    (vinyl) => {
      setWishList((prevWishList) => {
        if (prevWishList.includes(vinyl.id)) {
          return prevWishList.filter((number) => number !== vinyl.id);
        } else {
          return [...prevWishList, vinyl.id];
        }
      });
    },
    [setWishList]
  );
  useEffect(() => {
    setFavorite(wishList);
  }, [wishList]);
  return [wishList, toggleFavorite];
}
export default useWishList;
