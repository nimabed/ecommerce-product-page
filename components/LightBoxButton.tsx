'use client';

import { useEffect, useState } from 'react';

import Modal from './Modal';

export default function LightBoxButton({ children }: {
  children: React.ReactNode;
}) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleCloseModal() {
      setModalIsOpen(false);
    }


    mediaQuery.addEventListener("change", handleCloseModal);

    return () => {
      mediaQuery.removeEventListener("change", handleCloseModal);
    }

  }, [])



  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {children}
      </Modal>

      <button 
        onClick={() => setModalIsOpen(true)}
        className="hidden absolute inset-0 cursor-pointer md:block"
        disabled={modalIsOpen}
      >
      </button>
    </>
  )
}