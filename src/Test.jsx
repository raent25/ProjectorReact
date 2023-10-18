import clsx from "clsx";

function TestApp() {
  return (
    <div className="main">
      <div className="flexCenterCenter">
        <div className={clsx("record", "recordInColaction")} data-record-id="0">
          <div className="record-desc">
            <div className="record-cover">
              <div
                className={clsx("record-cover__btnLike", "btnLike")}
                data-record-id="0"
              >
                <img src="images/heartdark.svg" className="heartdark" alt="" />
                <img
                  src="images/heartdarkActive.svg"
                  className="heartdarkActive"
                  alt=""
                />
              </div>
              <img src="images/0.jpg" alt="" className="record-cover__img" />
              <div className={clsx("record-cover__btnPlay", "btnPlay")}>
                <object
                  title="btnPlay__svg"
                  className="btnPlay__svg"
                  data="images/play.svg"
                  type="image/svg+xml"
                ></object>
              </div>
            </div>
            <p className="record__songName">Wild Dances</p>
            <p className="record__artist">Ruslana</p>
            <p className="record__desc">
              Year:
              <span className={clsx("record__descValue", "record__year")}>
                2004
              </span>
            </p>
            <p className="record__desc">
              Style:
              <span className={clsx("record__descValue", "record__style")}>
                Folk
              </span>
            </p>
            <p className="record__desc">
              Country:
              <span className={clsx("record__descValue", "record__country")}>
                Ukraine
              </span>
            </p>
          </div>
          <div className={clsx("btn", "record__btn")} data-record-id="0">
            Add
            <object
              title="record__plus"
              className="record__plus"
              data="images/plus.svg"
              type="image/svg+xml"
            ></object>
          </div>
        </div>
      </div>
      <div className="flexCenterCenter">
        <div className="btnLike" data-record-id="0">
          <img src="images/heartdark.svg" className="heartdark" alt="" />
          <img
            src="images/heartdarkActive.svg"
            className="heartdarkActive"
            alt=""
          />
        </div>
      </div>
      <div className="flexCenterCenter">
        <div className="btn btn-padding" data-record-id="0">
          Add
          <object
            title="record__plus"
            className="record__plus"
            data="images/plus.svg"
            type="image/svg+xml"
          ></object>
        </div>
      </div>
      <div className="flexCenterCenter">
        <div className="filter-item">
          USA
          <object
            title="filter-item__svg"
            className="filter-item__svg"
            data="images/close.svg"
            type="image/svg+xml"
          ></object>
        </div>
      </div>
      <div className="flexCenterCenter">
        <div className="btn btn-active btn-padding" data-record-id="0">
          In collection
          <object
            title="record__plus"
            className="record__plus"
            data="images/check.svg"
            type="image/svg+xml"
          ></object>
        </div>
      </div>
      <div className="flexCenterCenter">
        <div className="addBlock">
          Added <span className="addBlock__time">14.12.2023</span>
        </div>
      </div>
      <div className="flexCenterCenter">
        <div className="btnPlay">
          <object
            title="btnPlay__svg"
            className="btnPlay__svg"
            data="images/play.svg"
            type="image/svg+xml"
          ></object>
        </div>
      </div>
      <div className="flexCenterCenter padding">
        <form action="" className="note">
          <label className="note__label" htmlFor="w">
            Add a note
            <object
              title="note__svg"
              className="note__svg"
              data="images/pen.svg"
              type="image/svg+xml"
            ></object>
          </label>
          <input
            name=""
            className="note__input"
            id=""
            placeholder="You can write here whatever you want.. "
          />
        </form>
      </div>
      <div className="flexCenterCenter padding">
        <div className="record recordMyCollection" data-record-id="0">
          <div className="record-desc">
            <div className="record-cover">
              <div
                className={clsx("record-cover__btnLike", "btnLike")}
                data-record-id="0"
              >
                <img src="images/heartdark.svg" className="heartdark" alt="" />
                <img
                  src="images/heartdarkActive.svg"
                  className="heartdarkActive"
                  alt=""
                />
              </div>
              <img src="images/0.jpg" alt="" className="record-cover__img" />
              <div className={clsx("record-cover__btnPlay", "btnPlay")}>
                <object
                  title="btnPlay__svg"
                  className="btnPlay__svg"
                  data="images/play.svg"
                  type="image/svg+xml"
                ></object>
              </div>
            </div>
            <div className="record-bigDesc">
              <div className="">
                <p className="record__songName">Wild Dances</p>
                <p className="record__artist">Ruslana</p>
              </div>
              <div className="addBlock">
                <span>
                  Added <span className="addBlock__time">14.12.2023</span>
                </span>
              </div>
            </div>
            <div
              className={clsx("btn", "btn-active", "record__btn")}
              data-record-id="0"
            >
              In collection
              <object
                title="record__plus"
                className="record__plus"
                data="images/check.svg"
                type="image/svg+xml"
              ></object>
            </div>
            <p className="record__desc">
              Year:
              <span className={clsx("record__descValue", "record__year")}>
                2004
              </span>
            </p>
            <p className="record__desc">
              Style:
              <span className={clsx("record__descValue", "record__style")}>
                Folk
              </span>
            </p>
            <p className="record__desc">
              Country:
              <span className={clsx("record__descValue", "record__country")}>
                Ukraine
              </span>
            </p>
            <p className="record__desc">
              Format:
              <span className={clsx("record__descValue", "record__format")}>
                2 x Vinyl, LP, Album
              </span>
            </p>
            <div className="record-trackList">
              <p className="record-trackList__header"></p>
              <ul className="record-trackList__list">
                <li className="record-trackList__item">
                  <p className="record-trackList__trackName">
                    <span className="record-trackList__num">A1 </span>One More
                    Time
                  </p>
                  <p className="record-trackList__time">3:41</p>
                </li>
                <li className="record-trackList__item">
                  <p className="record-trackList__trackName">
                    <span className="record-trackList__num">A2 </span>
                    Aerodynamic
                  </p>
                  <p className="record-trackList__time">3:41</p>
                </li>
                <li className="record-trackList__item">
                  <p className="record-trackList__trackName">
                    <span className="record-trackList__num">A3 </span>Digital
                    Love
                  </p>
                  <p className="record-trackList__time">3:41</p>
                </li>
              </ul>
            </div>
            <form action="" className={clsx("record__note", "note")}>
              <label className="note__label" htmlFor="w">
                Add a note
                <object
                  title="note_svg"
                  className="note__svg"
                  data="images/pen.svg"
                  type="image/svg+xml"
                ></object>
              </label>
              <input
                name=""
                className="note__input"
                id=""
                placeholder="You can write here whatever you want.. "
              />
            </form>
          </div>
        </div>
      </div>
      <div className="popup-wrap">
        <div className="popup-bg"></div>
        <div className="popup">
          <div className={clsx("record", "recordPopup")} data-record-id="0">
            <div className="record-desc">
              <div className="record-bigDesc">
                <div className="">
                  <p className="record__songName">Wild Dances</p>
                  <p className="record__artist">Ruslana</p>
                </div>
                <div className="clouse">
                  <object
                    title="clouse"
                    className="clouse__svg"
                    data="images/close.svg"
                    type="image/svg+xml"
                  ></object>
                </div>
              </div>
              <div className="record-cover">
                <div
                  className={clsx("record-cover__btnLike", "btnLike")}
                  data-record-id="0"
                >
                  <img
                    src="images/heartdark.svg"
                    className="heartdark"
                    alt=""
                  />
                  <img
                    src="images/heartdarkActive.svg"
                    className="heartdarkActive"
                    alt=""
                  />
                </div>
                <img src="images/0.jpg" alt="" className="record-cover__img" />
                <div className={clsx("record-cover__btnPlay", "btnPlay")}>
                  <object
                    title="btnPlay__svg"
                    className="btnPlay__svg"
                    data="images/play.svg"
                    type="image/svg+xml"
                  ></object>
                </div>
              </div>
              <p className="record__desc">
                Year:
                <span className={clsx("record__descValue", "record__year")}>
                  2004
                </span>
              </p>
              <p className="record__desc">
                Style:
                <span className={clsx("record__descValue", "record__style")}>
                  Folk
                </span>
              </p>
              <p className="record__desc">
                Country:
                <span className={clsx("record__descValue", "record__country")}>
                  Ukraine
                </span>
              </p>
              <p className="record__desc">
                Format:
                <span className={clsx("record__descValue", "record__format")}>
                  2 x Vinyl, LP, Album
                </span>
              </p>
              <div className="btn" data-record-id="0">
                Add
                <object
                  title="record__plus"
                  className="record__plus"
                  data="images/plus.svg"
                  type="image/svg+xml"
                ></object>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          {/* <Filter
        genreListStutus={genreListStutus}
        genreActive={filter.genreActive}
        genreList={genreList}
        decadeListStutus={decadeListStutus}
        decadeActive={filter.decadeActive}
        decadeList={decadeList}
        countryListStutus={countryListStutus}
        countryActive={filter.countryActive}
        countryList={countryList}
        onInputCountryItemClick={handleInputCountryItemClick}
        onInputCountryClick={handleInputCountryClick}
        onInputCountryBlur={handleInputCountryBlur}
        onInputGenreItemClick={handleInputGenreItemClick}
        onInputGenreClick={handleInputGenreClick}
        onInputGenreBlur={handleInputGenreBlur}
        onInputDecadeItemClick={handleInputDecadeItemClick}
        onInputDecadeClick={handleInputDecadeClick}
        onInputDecadeBlur={handleInputDecadeBlur}
        onSearchButtonClick={handleSearchButtonClick}
        search={
          <Search
            artistValue={artistValue}
            onSearchInputChange={handleSearchInputChange}
          />
        }
      />
      <Records
        filterList={filterList}
        countryList={countryList}
        genreList={genreList}
        collection={collection}
        wishlist={wishlist}
        onFavoriteClick={handleToFavorite}
        onColactionClick={handleToColaction}
      /> */}
  );
}
export default TestApp;
