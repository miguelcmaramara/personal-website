// Original source: https://stackoverflow.com/a/36862446/14160309
// copied to learn, edited once understood
import { useState, useEffect } from "react";

function getWindowDimensions() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  // creates the state
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // cleanup function performed on unmount
  }, []); // array in the end means to only rerun if any var in array changes. never re-run

  return windowDimensions;
}

export default useWindowDimensions;
