'use client'

import { useRef, useImperativeHandle } from 'react';
import { cn } from '@/lib/utils';

export type modalRef = {
  open: () => void
  close: () => void
}

export default function Modal({children, ref, className, closeModal}:
  {
    children: React.ReactNode,
    ref: React.Ref<modalRef>,
    className?: string,
    closeModal: () => void
  } 
) {

  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal()
    },
    close() {
      dialog.current?.close()
    }
  }))

  function clickOnBackdrop(e: React.MouseEvent<HTMLDialogElement>) {
    if(e.target === e.currentTarget) {
      closeModal();
    }
  }

  function pressEscKey(e: React.KeyboardEvent<HTMLDialogElement>) {
    e.preventDefault();
    closeModal()
  }

  return (
    <dialog
      className={cn("size-full max-w-none max-h-none bg-transparent duration-500 backdrop:bg-black/60", className)}
      ref={dialog}
      onClick={clickOnBackdrop}
      onCancel={pressEscKey}
    >
      {children}
    </dialog>
  )
}