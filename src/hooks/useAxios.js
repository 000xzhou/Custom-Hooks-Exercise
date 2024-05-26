import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useFlip = (url) => {
  const [state, setState] = useState([]);
  const handleState = async () => {
    const response = await axios.get(url);
    setState((cards) => [...cards, { ...response.data, id: uuid() }]);
  };
  return [state, handleState];
};

export default useFlip;
