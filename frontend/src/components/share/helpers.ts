import swal from "sweetalert";

export interface ShareData {
  title: string;
  text: string;
  url: string;
}

export const successMessage = () => {
  swal({
    title: "Gracias por compartir :D!",
    closeOnEsc: false,
    icon: "success",
    timer: 3000,
  });
};

export const shareLink = (data: ShareData) => {
  navigator
    .share(data)
    .then((_) => successMessage())
    .catch(() => {
      swal({
        title: "Error",
        text: "algo salio mal :(",
        closeOnEsc: false,
        icon: "error",
      });
    });
};