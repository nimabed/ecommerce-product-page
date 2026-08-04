import { useRef } from 'react';

export default function Modal({ children, isOpen, onClose }: {
  children: React.ReactNode,
  isOpen: boolean,
  onClose: () => void
}) {

  const dialogRef = useRef<HTMLDialogElement>(null);

  if(isOpen) {
    dialogRef.current?.showModal();
  }else {
    dialogRef.current?.close();
  }


  return (
    <dialog 
      onClose={onClose}
      ref={dialogRef}
      className="size-full bg-transparent cursor-default backdrop:bg-black/80"
    >
      {children}
    </dialog>
  )
}