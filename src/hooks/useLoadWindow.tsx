import { useEffect } from "react";

export default function useLoadWindow() {
  useEffect(() => {
    const handleLoad = () => {
      localStorage.clear();
    };

    window.onload = handleLoad;

    return () => {
      window.onload = null;
    };
  }, []);
}
