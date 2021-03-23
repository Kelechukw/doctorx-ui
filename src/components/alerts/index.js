import Swal from "sweetalert2";
import { getErrorMessage } from "../../helpers/errorMessage";

export const triggerLoadingAlert = (isLoading, message, description) => {
  isLoading
    ? Swal.fire({
        title: message || "Processing... Please wait",
        text: description,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        willOpen: () => {
          Swal.showLoading();
        },
      })
    : Swal.close();
};

export const triggerError = (error) => {
  const message = getErrorMessage(error);
  Swal.fire({
    icon: "error",
    title: message,
    timer: 4000,
  });
};

export const triggerSuccess = (message, timer) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: timer || 1500,
  });
};
