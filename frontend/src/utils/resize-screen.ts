import { BASE_WIDTH, BASE_HEIGHT } from "./constants";
import { $, isMobile, debounce } from "./helpers";

const resizeScreen = debounce(() => {
  const bodyElement = $("body") as HTMLBodyElement; // se accede al elemento body de la app
  let scale = Math.min( // obtiene valor de escalamiento de acuerdo al ancho y alto
    window.innerWidth / BASE_WIDTH, // se obtiene acho
    window.innerHeight / BASE_HEIGHT // y alto de la ventana
  );

  const mobile = isMobile();

  if (scale >= 1 || mobile) {
    // scale = !mobile ? (scale > 1.1 ? 1 : scale) : 1;
    scale = !mobile ? scale : 1;
  }

  let applyZoom =
    window.innerWidth < BASE_WIDTH
      ? Math.round((window.innerWidth / BASE_WIDTH) * 100)
      : 100;

  bodyElement.setAttribute(
    "style",
    `zoom: ${applyZoom}%; transform: scale(${scale});` 
  );
}, 100);

export default resizeScreen;

