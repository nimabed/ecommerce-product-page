'use client';

import { useRef } from 'react';

import Modal from './Modal';

export default function LightBoxButton({ children }: {
  children: React.ReactNode;
}) {

  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Modal ref={dialogRef}>
        {children}
      </Modal>

      <button 
        onClick={() => dialogRef.current?.showModal()}
        className="hidden absolute inset-0 cursor-pointer z-4 md:block"
      >
      </button>
    </>
  )
}