import { useCallback, useState } from "react";
import useResize from "./useResize";

export const M = 375;
export const ML = 600;
export const SD = 768;
export const MD = 1000;
export const LD = 1200;
export const HD = 1300;
export const SHD = 1800;
export const QHD = 2400;

const useResponsive = (width) => {
  const [detect, setDetect] = useState();

  const checkPassed = useCallback(
    (windowWidth) => setDetect(windowWidth < width),
    [width]
  );

  useResize((windowWidth) => checkPassed(windowWidth));

  return { detect };
};

export default useResponsive;
