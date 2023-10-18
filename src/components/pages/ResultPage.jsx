import Records from "../Records/Records.jsx";
import { useOutletContext, Navigate, useNavigate } from "react-router-dom";
function ResultPage() {
  const navigate = useNavigate();
  const { filter } = useOutletContext();
  const isFiltersEmpty =
    filter.artist == "" &&
    filter.genre == "" &&
    filter.decade == "" &&
    filter.country == "";
  return (
    <div className="main">
      {isFiltersEmpty && <Navigate to="/search" />}
      <br />
      <div
        className="btn"
        onClick={() =>
          navigate({
            pathname: "/search",
          })
        }
      >
        Reset
      </div>
      <br />
      <Records filter={filter} />
    </div>
  );
}
export default ResultPage;
