import clsx from "clsx";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { Heart } from "../Icons/Icons.jsx";
import { motion } from "framer-motion";

function VinylItem({
  vinyl,
  toggleCollection,
  toggleFavorite,
  wishList,
  setOpenedVinylId,
  collectionList,
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [refLikeHeight, setRefLikeHeight] = useState(0);
  const refLike = useRef(null);
  function handleHeartRef(element) {
    if (element !== null) {
      refLike.current = element;
      setRefLikeHeight(refLike.current.offsetHeight);
    }
  }

  return (
    <div
      key={vinyl.id}
      className={clsx("record", "recordInColaction")}
      data-record-id="0"
    >
      <div className="record-desc">
        <div className="record-cover">
          <div
            className={clsx("record-cover__btnLike", "btnLike")}
            data-record-id="0"
            onClick={() => toggleFavorite(vinyl)}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            ref={handleHeartRef}
            data-testid="favorite"
          >
            <Heart active={wishList} />
            {tooltipVisible && (
              <motion.div
                className="tooltip"
                style={{ top: refLikeHeight + 2, left: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 0.3,
                }}
              >
                Додати в обране
              </motion.div>
            )}
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            src={vinyl.thumb_image}
            alt="Thumb"
            className="record-cover__img"
            onClick={() => setOpenedVinylId(vinyl.id)}
          />
        </div>
        <p className="record__songName">{vinyl.title}</p>
        <p className="record__artist">{vinyl.artist}</p>
        <p className="record__desc">
          Year:
          <span className={clsx("record__descValue", "record__year")}>
            {vinyl.year}
          </span>
        </p>
        <p className="record__desc">
          Genre:
          <span className={clsx("record__descValue", "record__style")}>
            {vinyl.genre.title}
          </span>
        </p>
        <p className="record__desc">
          Country:
          <span className={clsx("record__descValue", "record__country")}>
            {vinyl.country}
          </span>
        </p>
      </div>
      {collectionList ? (
        <div
          className={clsx("btn", "record__btn", "btn-active")}
          onClick={() => toggleCollection(vinyl)}
          data-testid="removeCollection"
        >
          In collection
          <object
            title="record__plus"
            className="record__plus"
            data="images/check.svg"
            type="image/svg+xml"
          ></object>
        </div>
      ) : (
        <div
          className={clsx("btn", "record__btn")}
          onClick={() => toggleCollection(vinyl)}
          data-testid="addCollection"
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
  );
}
VinylItem.propTypes = {
  vinyl: PropTypes.any,
  toggleCollection: PropTypes.any,
  toggleFavorite: PropTypes.any,
  wishList: PropTypes.any,
  setOpenedVinylId: PropTypes.any,
  collectionList: PropTypes.any,
};
export default VinylItem;
