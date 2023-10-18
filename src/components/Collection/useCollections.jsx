import { useContext } from "react";
import { CollectionContext } from "./CollectionProvider.jsx";

export function useCollections() {
  const { collection, toggleCollection, toggleNote, collectionFull } =
    useContext(CollectionContext);

  return { collection, toggleCollection, toggleNote, collectionFull };
}
