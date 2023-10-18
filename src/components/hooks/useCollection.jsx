import { useEffect, useReducer, useCallback } from "react";
function getCollectionList() {
  let collection = window.localStorage.getItem("collection");
  if (collection) {
    return JSON.parse(collection);
  }
  return [];
}
function setCollectionList(item) {
  window.localStorage.setItem("collection", JSON.stringify(item));
}
function collectionReducer(state, action) {
  switch (action.type) {
    case "add": {
      const newItem = { id: action.id, note: action.note };
      const updatedCollection = [...state.collection, newItem];
      return { ...state, collection: updatedCollection };
    }
    case "remove": {
      const updatedCollection = state.collection.filter(
        (item) => item.id !== action.id
      );
      return { ...state, collection: updatedCollection };
    }
    case "changeValue": {
      const updatedCollection = state.collection.map((item) => {
        if (item.id == action.id) {
          item.note = action.note;
        }
        return item;
      });
      return { ...state, collection: updatedCollection };
    }
    default:
      return state;
  }
}

function useCollectionList() {
  const [state, dispatch] = useReducer(collectionReducer, undefined, () => ({
    collection: getCollectionList(),
  }));
  const toggleCollection = useCallback(
    (vinyl) => {
      if (state.collection.some((item) => item.id === vinyl.id)) {
        dispatch({ type: "remove", id: vinyl.id });
      } else {
        dispatch({
          type: "add",
          id: vinyl.id,
          note: "",
        });
      }
    },
    [state.collection]
  );
  function toggleNote(vinyl, value) {
    dispatch({ type: "changeValue", id: vinyl.id, note: value });
  }
  useEffect(() => {
    setCollectionList(state.collection);
  }, [state.collection]);
  let collection = state.collection.map((item) => item.id);
  let collectionFull = state.collection;
  return [collection, toggleCollection, toggleNote, collectionFull];
}
export default useCollectionList;
