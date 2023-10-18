import clsx from "clsx";
import { Portal } from "react-portal";
import { useEffect, useRef, useReducer } from "react";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./ModalVinyl.css";
import useVinylById from "../hooks/useVinylById.jsx";
import useKeyPress from "../hooks/useKeyPress.jsx";
import { Heart } from "../Icons/Icons.jsx";
import { useCollections } from "../Collection/useCollections.jsx";
function modalReducer(state, action) {
  switch (action.type) {
    case "opened": {
      return { ...state, opened: true };
    }
    case "closed": {
      return { ...state, opened: false };
    }
    case "play": {
      return { ...state, player: true };
    }
    case "pause": {
      return { ...state, player: false };
    }
    default:
      return state;
  }
}

function ModalVinyl({
  vinylId,
  inWishlist,
  inCollection,
  onAddToWishlist,
  onAddToCollection,
  onClose,
}) {
  const { toggleNote, collectionFull } = useCollections();

  const [state, dispatch] = useReducer(modalReducer, undefined, () => ({
    opened: false,
    player: false,
  }));
  const PLAY_VARIENTS = {
    play: {
      rotate: 360,
    },
    notPlay: {
      rotate: 0,
      repeat: 0,
      duration: 0,
    },
  };
  let valueNote;
  if (state.opened && collectionFull.some((item) => item.id === vinylId)) {
    valueNote = collectionFull.find((item) => item.id === vinylId).note;
  } else {
    valueNote = "";
  }
  const { data: vinyl } = useVinylById(vinylId);
  const audioRef = useRef(null);
  //
  function handleChangeNote(event, vinyl) {
    toggleNote(vinyl, event.target.value);
  }

  //
  function handleClose() {
    dispatch({ type: "pause" });
    dispatch({ type: "closed" });
  }
  function handlePlay() {
    state.player ? dispatch({ type: "pause" }) : dispatch({ type: "play" });
    const audio = audioRef.current;
    state.player ? audio.pause() : audio.play();
  }
  useEffect(() => {
    if (vinylId) {
      dispatch({ type: "opened" });
    }
  }, [vinylId]);

  function handlePlayBtn() {
    if (audioRef.current) {
      state.player ? dispatch({ type: "pause" }) : dispatch({ type: "play" });
      const audio = audioRef.current;
      state.player ? audio.pause() : audio.play();
    }
  }
  useKeyPress("Space", handlePlayBtn);
  return (
    <Portal>
      <CSSTransition
        timeout={500}
        in={state.opened}
        onExited={onClose}
        nodeRef={audioRef}
      >
        <CSSTransition
          in={state.opened && !!vinyl}
          mountOnEnter
          unmountOnExit
          timeout={500}
        >
          <div className="modal">
            <div className="popup-bg"></div>
            <div className="popup">
              <div className={clsx("record", "recordPopup")} data-record-id="0">
                <div className="record-desc">
                  <div className="record-bigDesc">
                    <div className="">
                      <p className="record__songName">{vinyl?.title}</p>
                      <p className="record__artist">{vinyl?.artist}</p>
                    </div>
                    <div className="close" onClick={() => handleClose()}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="icon_close">
                          <path
                            id="Vector"
                            d="M18.6667 18.6667L5.33334 5.33334M18.6667 5.33334L5.33334 18.6667"
                            stroke="black"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="record-cover">
                    <div
                      className={clsx("record-cover__btnLike", "btnLike")}
                      data-record-id="0"
                      onClick={() => onAddToWishlist(vinyl)}
                    >
                      <Heart active={inWishlist} />
                    </div>
                    <img
                      src={vinyl?.image.normal}
                      alt=""
                      className="record-cover__img"
                    />
                    <div
                      className={clsx("record-cover__btnPlay", "btnPlay")}
                      onClick={() => handlePlay()}
                    >
                      <motion.div
                        animate={state.player ? "play" : "notPlay"}
                        variants={PLAY_VARIENTS}
                        transition={{
                          ease: "linear",
                          repeat: state.player ? Infinity : 0,
                          duration: state.player ? 1 : 0,
                        }}
                        className="btnPlay__svg"
                      >
                        {state.player ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="3"
                              stroke="#1C274C"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711Z"
                              stroke="#1C274C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.40381 16.5967C4.8654 14.0583 4.8654 9.94271 7.40381 7.4043M16.5962 7.4043C19.1346 9.94271 19.1346 14.0583 16.5962 16.5967"
                              stroke="#1C274C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                          >
                            <path
                              d="M17.6428 7.38426C19.4523 8.32468 19.4523 10.6757 17.6428 11.6161L4.07138 18.6692C2.26186 19.6096 -4.76837e-05 18.4341 -4.76837e-05 16.5533V2.4471C-4.76837e-05 0.566272 2.26186 -0.609241 4.07138 0.331171L17.6428 7.38426Z"
                              fill="#0A2530"
                            />
                          </svg>
                        )}
                      </motion.div>
                    </div>
                  </div>
                  <p className="record__desc">
                    Year:
                    <span className={clsx("record__descValue", "record__year")}>
                      {vinyl?.releaseDate.toLocaleDateString().slice(6)}
                    </span>
                  </p>
                  <p className="record__desc">
                    Style:
                    <span
                      className={clsx("record__descValue", "record__style")}
                    >
                      {vinyl?.genres.map((genre) => {
                        return <span key={genre.id}>{genre.title}</span>;
                      })}
                    </span>
                  </p>
                  <p className="record__desc">
                    Country:
                    <span
                      className={clsx("record__descValue", "record__country")}
                    >
                      {vinyl?.countries
                        .map((country) => country.title)
                        .join(" / ")}
                    </span>
                  </p>

                  {inCollection ? (
                    <>
                      <input
                        type="text"
                        name="note"
                        className="note"
                        onChange={(event) => handleChangeNote(event, vinyl)}
                        value={valueNote}
                      />
                      <div
                        className={clsx("btn", "record__btn", "btn-active")}
                        onClick={() => onAddToCollection(vinyl)}
                      >
                        In collection
                        <object
                          title="record__plus"
                          className="record__plus"
                          data="images/check.svg"
                          type="image/svg+xml"
                        ></object>
                      </div>
                    </>
                  ) : (
                    <div
                      className={clsx("btn", "record__btn")}
                      onClick={() => onAddToCollection(vinyl)}
                    >
                      Add
                      <object
                        title="record__plus"
                        className="record__plus"
                        data="images/plus.svg"
                        type="image/svg+xml"
                      ></object>
                    </div>
                  )}
                </div>
                <audio
                  src="/audio.mp3"
                  ref={audioRef}
                  className="audio"
                ></audio>
              </div>
            </div>
          </div>
        </CSSTransition>
      </CSSTransition>
    </Portal>
  );
}
ModalVinyl.propTypes = {
  vinylId: PropTypes.any,
  inWishlist: PropTypes.any,
  inCollection: PropTypes.any,
  onAddToWishlist: PropTypes.any,
  onAddToCollection: PropTypes.any,
  onClose: PropTypes.any,
  toggleNote: PropTypes.any,
  noteValue: PropTypes.any,
};
export default ModalVinyl;
