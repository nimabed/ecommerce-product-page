'use client'

import { useRef, useImperativeHandle } from 'react';
import { cn } from '@/lib/utils';

export type modalRef = {
  open: () => void
  close: () => void
}

export default function Modal({children, ref, className, closeManually}:
  {
    children: React.ReactNode,
    ref: React.Ref<modalRef>,
    className?: string,
    closeManually?: () => void
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
      if(closeManually) {
        closeManually();
      }else{
        dialog.current?.close();
      }
    }
  }

  function pressEscKey(e: React.KeyboardEvent<HTMLDialogElement>) {
    e.preventDefault();
    if(closeManually) {
      closeManually();
    }else{
      dialog.current?.close()
    }
  }

  return (
    <dialog
      className={cn("size-full max-w-none max-h-none bg-transparent overflow-y-auto backdrop:bg-black/60", className)}
      ref={dialog}
      onClick={clickOnBackdrop}
      onCancel={pressEscKey}
    >
      {children}
    </dialog>
  )
}