import { useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter.jsx";
function SearchPage() {
  const navigate = useNavigate();
  function onSubmit(filter) {
    const newParams = new URLSearchParams();
    if (filter.artist) {
      newParams.set("artist", filter.artist);
    }
    if (filter.genre) {
      newParams.set("genre", filter.genre);
    }
    if (filter.decade) {
      newParams.set("decade", filter.decade);
    }
    if (filter.country) {
      newParams.set("country", filter.country);
    }
    navigate({
      pathname: "/search/result",
      search: newParams.toString(),
    });
  }
  return (
    <div className="main">
      <Filter onSubmit={onSubmit} />
    </div>
  );
}
export default SearchPage;
