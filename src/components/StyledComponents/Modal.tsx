import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

interface Props {
  children: React.ReactNode;
  buttonCaption: string;
}

const Modal = forwardRef(({ children, buttonCaption }: Props, ref) => {
  const dialog = useRef<HTMLDialogElement>();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current?.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog as React.RefObject<HTMLDialogElement>}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
