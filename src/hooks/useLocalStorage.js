import { useState, useEffect } from "react";

const useLocalStorage = (key, initialVal) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialVal;
    } catch (error) {
      return error;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
