import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = (url) => {
  const [state, setState] = useState([]);
  //   const handleState = async (options = {}) => {
  const handleState = async (endpoint) => {
    let fullURL;
    if (typeof endpoint === "string") {
      fullURL = url + endpoint;
    } else {
      fullURL = url;
    }
    const response = await axios.get(fullURL);
    setState((cards) => [...cards, { ...response.data, id: uuid() }]);
  };
  return [state, handleState];
};

export default useAxios;
