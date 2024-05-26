import axios from "axios";
import { v1 as uuid } from "uuid";
import useLocalStorage from "./useLocalStorage";

const useAxios = (url) => {
  const [state, setState] = useLocalStorage(url, []);
  //   const handleState = async (options = {}) => {
  const handleState = async (endpoint) => {
    let fullURL;
    if (typeof endpoint === "string") {
      fullURL = url + endpoint;
    } else {
      fullURL = url;
    }
    const response = await axios.get(fullURL);
    setState((items) => [...items, { ...response.data, id: uuid() }]);
  };
  const resetState = () => {
    return setState([]);
  };
  return [state, handleState, resetState];
};

export default useAxios;
