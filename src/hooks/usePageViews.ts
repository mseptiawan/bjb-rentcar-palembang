import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-9GEEL3LXPH", {
        page_path: location.pathname,
      });
    }
  }, [location]);
}
