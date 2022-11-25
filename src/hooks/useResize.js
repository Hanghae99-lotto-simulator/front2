import { useCallback, useEffect } from "react";

const useResize = (onResize) => {
  const _onResize = useCallback(() => {
    onResize && onResize(window.innerWidth, window.innerHeight);
  }, [onResize]);

  useEffect(() => {
    _onResize();
    window.addEventListener("resize", _onResize);

    return () => {
      window.removeEventListener("resize", _onResize);
    };
  }, [_onResize]);
};

export default useResize;
