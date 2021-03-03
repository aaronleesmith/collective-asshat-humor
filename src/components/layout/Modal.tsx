import React from "react";
import clsx from "clsx";
import ReactModal from "react-modal";

export const Modal: React.FC<ReactModal.Props> = ({ children, ...rest }) => {
  return (
    <ReactModal
      {...rest}
      preventScroll={true}
      overlayClassName={clsx([
        "fixed",
        "inset-0",
        "bg-gray-500",
        "bg-blur",
        "bg-opacity-50",
      ])}
      className={clsx([
        "absolute",
        "p-4",
        "bg-white",
        "h-1/2",
        "inset-5",
        "outline-none",
        "m-auto",
        "flex",
        "flex-col",
        "space-y-6",
      ])}
    >{children}</ReactModal>
  );
};

export default Modal;
