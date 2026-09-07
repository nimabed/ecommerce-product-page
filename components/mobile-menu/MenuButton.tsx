'use client';

import { useState } from 'react';
import { Menu as MobileMenuIcon } from 'lucide-react';
import Menu from './Menu';

export default function MenuButton() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleParentCloseMenu(e: React.MouseEvent) {
    if(e.target !== e.currentTarget) return
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250)
  }

  function handleChildCloseMenu(e: React.MouseEvent) {
    e.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250)
  }

  return (
    <>
      <button 
        className="text-dark-grayish-blue cursor-pointer pt-1 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <MobileMenuIcon strokeWidth={3} />
      </button>
      {isOpen && <Menu 
        isOpen={isOpen}
        isClosing={isClosing}
        onParentClose={handleParentCloseMenu} 
        onChildClose={handleChildCloseMenu} 
      />}
    </>
  )
}