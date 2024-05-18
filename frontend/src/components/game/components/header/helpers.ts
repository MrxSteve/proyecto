import swal from "sweetalert";

export const handleBack = (cb: (action: boolean) => void) => {
  swal({
    title: "Saliendo",
    text: "¿Seguro que quieres salir del juego?",
    icon: "warning",
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: ["NO", "SI"],
  }).then((value) => cb(!!value));
};