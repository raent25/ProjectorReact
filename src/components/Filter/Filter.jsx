import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import * as Yup from "yup";
import styles from "./Filter.module.css";
import useGenreList from "../hooks/useGenreList.jsx";
import useCountryList from "../hooks/useCountryList.jsx";
import useDecadeList from "../hooks/useDecadeList.jsx";
import MultiselectorInput from "../MiltiselectorInput/MultiselectorInput.jsx";
const formSchema = Yup.object({
  artist: Yup.string()
    .min(2, "Мінімум 2 символи")
    .max(80, "Максимум 80 символів")
    .matches(/^[a-zA-Z\s-]+$/, "тільки латинські букви, пробіл чи дефіс"),
  genre: Yup.array().max(3, "Не більше 3х елементів"),
  country: Yup.array().max(3, "Не більше 3х елементів"),
  decade: Yup.array().max(3, "Не більше 3х елементів"),
});
function Filter({
  onSubmit,
  defaultValues = {
    artist: "",
    genre: [""],
    country: [""],
    decade: [""],
  },
}) {
  const genreList = useGenreList();
  const decadeList = useDecadeList();
  const countryList = useCountryList();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema),
  });

  const handleFormSubmit = (data) => {
    const filterData = {
      artist: data.artist,
      genre: data.genre,
      country: data.country,
      decade: data.decade,
    };
    onSubmit(filterData);
  };
  const handleFormReset = () => {
    reset(defaultValues);
  };
  if (countryList.isLoading && genreList.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={clsx(styles.filter, "padding")}
    >
      <p className={styles.errors}>
        {errors.artist ? errors.artist.message : ""}
      </p>
      <input
        type="text"
        {...register("artist")}
        className={styles.item}
        placeholder="Artist"
        id="artist"
      />
      <p className={styles.alertToInput}></p>
      <Controller
        control={control}
        name="genre"
        render={({ field }) => (
          <MultiselectorInput
            placeholder="Genres"
            options={genreList.data.map((genre) => ({
              label: genre.title,
              value: genre.id,
            }))}
            error={errors.genre}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="decade"
        render={({ field }) => (
          <MultiselectorInput
            placeholder="Decade"
            options={decadeList.map((decade) => ({
              label: decade.decadeName,
              value: decade.id,
            }))}
            error={errors.decade}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <MultiselectorInput
            placeholder="Country"
            options={countryList.data.map((country) => ({
              label: country.title,
              value: country.id,
            }))}
            error={errors.country}
            {...field}
          />
        )}
      />
      <button className="btn" id="btn">
        Search
      </button>
      <button className="btn" type="button" onClick={handleFormReset}>
        Reset
      </button>
    </form>
  );
}

Filter.propTypes = {
  onSubmit: PropTypes.any,
  defaultValues: PropTypes.array,
};
export default Filter;
