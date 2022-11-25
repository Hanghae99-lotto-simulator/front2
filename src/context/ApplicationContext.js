import { createContext, useCallback, useContext, useState } from "react";
import { hash } from "../common";
import UIContext from "./UiContext";

export const applicationContext = createContext();

export const ApplicationContext = ({ children }) => {
  const [render, setRender] = useState(null);

  const requestRender = useCallback((values) => {
    if (values) {
      setRender(hash(values));
    } else {
      setRender(new Date().getTime());
    }
  }, []);

  const actions = {
    render,
    requestRender,
  };

  return (
    <applicationContext.Provider value={actions}>
      <UIContext>{children}</UIContext>
    </applicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const c = useContext(applicationContext);

  return c;
};
