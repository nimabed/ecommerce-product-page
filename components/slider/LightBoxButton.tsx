'use client';

import { useEffect } from 'react';

import Modal from './Modal';

export default function LightBoxButton({ children, isOpen, openModal, closeModal }: {
  children: React.ReactNode,
  isOpen: boolean,
  openModal: () => void,
  closeModal: () => void
}) {


  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleCloseModal() {
      closeModal();
    }


    mediaQuery.addEventListener("change", handleCloseModal);

    return () => {
     mediaQuery.removeEventListener("change", handleCloseModal);
    }

  }, [closeModal])



  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {children}
      </Modal>

      <button 
        onClick={openModal}
        className="hidden absolute inset-0 cursor-pointer md:block"
        disabled={isOpen}
      >
      </button>
    </>
  )
}