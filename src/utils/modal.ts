import { Id, toast } from "react-toastify";

let idLoadingModal: Id;

export const setLoadingOn = () => {
  idLoadingModal = toast.loading("Loading...", {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

export const setLoadingOff = () => toast.dismiss(idLoadingModal);

export const setLoadingOffWithMessage = (message: string, error: boolean) => {
  toast.update(idLoadingModal, {
    render: message,
    type: error ? "error" : "success",
    isLoading: false,
    autoClose: 3500,
  });
};
