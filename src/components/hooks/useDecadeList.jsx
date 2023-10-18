import { useState } from "react";
function useDecadeList() {
  const [decadeList] = useState([
    {
      id: 1980,
      decadeName: "1980-1990",
      decade: 1980,
    },
    {
      id: 1990,
      decadeName: "1990-2000",
      decade: 1990,
    },
    {
      id: 2000,
      decadeName: "2000-2010",
      decade: 2000,
    },
    {
      id: 2010,
      decadeName: "2010-2020",
      decade: 2010,
    },
    {
      id: 2020,
      decadeName: "2020-...",
      decade: 2020,
    },
  ]);
  return decadeList;
}
export default useDecadeList;
