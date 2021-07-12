import { useEffect } from "react";

function Interval({ state, updateCount }) {
  useEffect(() => {
    setTimeout(() => {
      updateCount();
    }, 1000);
    return () => {};
  }, [state]);

  return null;
}

export default Interval;
