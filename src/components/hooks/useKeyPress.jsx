import { useEffect } from "react";

function useKeyPress(code, func) {
  if (typeof func !== "function") {
    throw new Error("Error function");
  }

  if (typeof code !== "string") {
    throw new Error("Error code");
  }
  useEffect(() => {
    function handleKeydown(event) {
      if (event.code === code) {
        func();
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
}
export default useKeyPress;
