import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import Header, {
  HEADER_TYPE_DEFAULT,
} from "../components/section/header/Header";
import { useApplicationContext } from "./ApplicationContext";

export const CONTAINER_TYPE_DEFAULT = "container_type_default";

const initValues = {
  container: {
    type: CONTAINER_TYPE_DEFAULT,
  },
  header: {
    type: HEADER_TYPE_DEFAULT,
    menus: [],
    with_spacing: false,
    with_sticky: false,
  },
};

export const uiContext = createContext();

export const UiContext = ({ children }) => {
  const { requestRender } = useApplicationContext();

  const { container, header } = initValues;

  const containerUi = useRef(container);
  const headerUi = useRef(header);

  const setContainerUi = useCallback((updateContainerUi) => {
    containerUi.current = { ...initValues.header, ...updateContainerUi };
  }, []);

  const setHeaderUi = useCallback((updateHeaderUi) => {
    headerUi.current = { ...initValues.header, ...updateHeaderUi };
  }, []);

  const ui = useMemo(() => {
    const setUi = ({ container, header }) => {
      setContainerUi(container);
      setHeaderUi(header);

      requestRender();
    };

    return {
      set: ({ container, header }) => {
        setUi({
          container: container || containerUi.current,
          header: header || headerUi.current,
        });
      },
      initialize: (params) => {
        setUi(params);
      },
    };
  }, [requestRender, setContainerUi, setHeaderUi]);

  const actions = {
    ui,
  };

  return (
    <uiContext.Provider value={actions}>
      <div className="rootContainer">
        <Header {...headerUi.current} />
        {children}
      </div>
    </uiContext.Provider>
  );
};

export default UiContext;

export const useUiContext = (params) => {
  const c = useContext(uiContext);

  useLayoutEffect(() => {
    c.ui.initialize({
      container: params.container,
      header: params.header,
      footer: params.footer,
    });
  }, [c, params]);

  return c;
};
