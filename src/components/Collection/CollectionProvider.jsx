import PropTypes from "prop-types";
import { createContext } from "react";
import useCollection from "../hooks/useCollection.jsx";

const CollectionContext = createContext();

function CollectionProvider({ children }) {
  const [collection, toggleCollection, toggleNote, collectionFull] =
    useCollection();

  return (
    <CollectionContext.Provider
      value={{ collection, toggleCollection, toggleNote, collectionFull }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

CollectionProvider.propTypes = {
  children: PropTypes.node,
};

export { CollectionContext, CollectionProvider };
