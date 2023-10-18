// import { useState } from "react";
//import Filter from "../Filter/Filter.jsx";
// import Search from "../Search/Search.jsx";
// import useGenreList from "../hooks/useGenreList.jsx";
// import useDecadeList from "../hooks/useDecadeList.jsx";
// import useCountryList from "../hooks/useCountryList.jsx";
// import useFilterVinylList from "../hooks/useFilterVinylList.jsx";
import { useParams } from "react-router-dom";
function VinylPage() {
  const { vinylId } = useParams();
  // const genreList = useGenreList();
  // const decadeList = useDecadeList();
  // const countryList = useCountryList();
  // const filterList = useFilterVinylList();
  // const [collection, setCollection] = useState([]);
  // const [wishlist, setWishlist] = useState([]);

  // function handleToColaction(event, vinyl) {
  //   if (collection.includes(vinyl.id)) {
  //     setCollection(collection.filter((number) => number !== vinyl.id));
  //   } else {
  //     setCollection(collection.concat(vinyl.id));
  //   }
  // }
  // function handleToFavorite(vinyl) {
  //   if (wishlist.includes(vinyl.id)) {
  //     setWishlist(wishlist.filter((number) => number !== vinyl.id));
  //   } else {
  //     setWishlist([...wishlist, vinyl.id]);
  //   }
  // }
  return (
    <div className="main">
      <h1>{vinylId}</h1>
    </div>
  );
}
export default VinylPage;
