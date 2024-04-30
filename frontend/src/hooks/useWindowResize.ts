import { useEffect } from "react";
import onWindowResize from "../utils/resize-screen";

const useWindowResize = () => {
  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    onWindowResize();

    // bloqueamos click derecho
    document.addEventListener("contextmenu", (e) => e.preventDefault(), false);

    // cuando el componente se desmonta removemos el listener
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);
};

export default useWindowResize;