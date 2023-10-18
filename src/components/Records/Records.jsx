import clsx from "clsx";
import { useSearchParams, Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Records.css";
import { useCollections } from "../Collection/useCollections.jsx";
import { useFavorites } from "../Favorites/useFavorites.jsx";
import useFilterVinylList from "../hooks/useFilterVinylList.jsx";
import ModalVinyl from "../ModalVinyl/ModalVinyl.jsx";
import VinylItem from "../VinylItem/VinylItem.jsx";

function Records({ filter }) {
  const { collection, toggleCollection } = useCollections();
  const { wishList, toggleFavorite } = useFavorites();
  const [searchParams] = useSearchParams();
  const [openedVinylId, setOpenedVinylId] = useState(null);
  const page = searchParams.has("page")
    ? parseInt(searchParams.get("page"), 10)
    : 1;
  const PAGE_SIZE = 12;
  const filterList = useFilterVinylList(filter, {
    offset: (page - 1) * PAGE_SIZE,
    limit: PAGE_SIZE,
  });
  if (filterList.isLoading) {
    return <h1>Loading...</h1>;
  }
  const recordsList = filterList.results;
  let recordsLength = filterList.total;
  let paginationwholePart = Math.floor(recordsLength / PAGE_SIZE) + 1;
  let paginationRemainder = recordsLength % PAGE_SIZE;
  function getPage(searchParams, number) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", number);
    return newParams.toString();
  }
  function handleAddToCollection(event, vinyl) {
    toggleCollection(vinyl);
  }

  function handleWishlistClick(event, vinyl) {
    toggleFavorite(vinyl);
  }

  const renderPugination = function (page, paginationwholePart) {
    let pagination = [];
    paginationwholePart = paginationRemainder
      ? paginationwholePart
      : paginationwholePart - 1;
    for (let i = 1; i <= paginationwholePart && i < 8; i++) {
      if (page == i) {
        pagination.push(
          <Link
            to={{ search: getPage(searchParams, i) }}
            key={i}
            className={clsx("pagination-number", "pagination-active")}
          >
            {i}
          </Link>
        );
      } else {
        pagination.push(
          <Link
            to={{ search: getPage(searchParams, i) }}
            key={i}
            className="pagination-number"
          >
            {i}
          </Link>
        );
      }
    }
    return pagination;
  };

  return (
    <>
      <main className={clsx("records", "padding")}>
        {recordsList.length ? (
          recordsList.map((item, index) => {
            return (
              <VinylItem
                key={index}
                vinyl={item}
                toggleCollection={toggleCollection}
                toggleFavorite={toggleFavorite}
                wishList={wishList.includes(item.id)}
                setOpenedVinylId={setOpenedVinylId}
                collectionList={collection.includes(item.id)}
              />
            );
          })
        ) : recordsList.length ? (
          <Navigate to={{ search: getPage(searchParams, 1) }} />
        ) : (
          <div>Платівок не знайдено!</div>
        )}
      </main>
      <nav className="pagination">
        {renderPugination(page, paginationwholePart)}
      </nav>
      <ModalVinyl
        vinylId={openedVinylId}
        inCollection={
          openedVinylId ? collection.includes(openedVinylId) : false
        }
        inWishlist={openedVinylId ? wishList.includes(openedVinylId) : false}
        onAddToCollection={(event) => {
          handleAddToCollection(event, { id: openedVinylId });
        }}
        onAddToWishlist={(event) => {
          handleWishlistClick(event, { id: openedVinylId });
        }}
        onClose={() => setOpenedVinylId(null)}
      />
    </>
  );
}
Records.propTypes = {
  filter: PropTypes.any,
};
export default Records;
