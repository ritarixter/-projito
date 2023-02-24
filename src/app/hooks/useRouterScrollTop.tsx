import { useEffect } from "react";
import { useLocation } from "react-router";

const useRouterScrollTop = ():void => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

};

export default useRouterScrollTop;