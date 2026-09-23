'use client';
import { useState, useRef } from 'react';
import { Menu } from 'lucide-react';
import MenuContent from './Menu';
import Modal, { type modalRef } from '@/components/ui/Modal';

export default function MenuButton() {
  
  const modalRef = useRef<modalRef>(null);
  const [isClosing, setIsClosing] = useState(false);

  function openModal() {
    modalRef.current?.open();
    document.body.style.overflow = 'hidden'; 
  }

  function closeModal() {
    setIsClosing(true);
    setTimeout(() => {
      modalRef.current?.close();
      document.body.style.overflow = '';
      setIsClosing(false);
    }, 400)
  }

  return (
    <>
      <Modal ref={modalRef} closeManually={closeModal} className="md:hidden">
        <MenuContent isClosing={isClosing} onClose={closeModal}  />
      </Modal>
      <button 
        className="text-dark-grayish-blue cursor-pointer pt-1 md:hidden"
        onClick={openModal}
      >
        <Menu strokeWidth={3} />
      </button>
    </>
  )
}