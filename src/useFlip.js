import { useState } from "react";

const useFlip = (initialVal = false) => {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState((state) => !state);
  };
  return [state, toggle];
};

export default useFlip;
