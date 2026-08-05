'use client';

import { useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';

export default function MenuButton() {
  
  const [menuIsActive, setMenuIsActive] = useState(false);

  function handleParentCloseMenu(e: React.MouseEvent) {
    if(e.target !== e.currentTarget) return
    setMenuIsActive(false);
  }

  function handleChildCloseMenu(e: React.MouseEvent) {
    e.stopPropagation();
    setMenuIsActive(false);
  }

  return (
    <>
      <button 
        className="cursor-pointer md:hidden"
        onClick={() => setMenuIsActive(true)}
      >
        <Image className="mt-1 mr-1" src='/icon-menu.svg' alt='menu icon' width={17} height={17} />
      </button>
      {menuIsActive && <Menu onParentClose={handleParentCloseMenu} onChildClose={handleChildCloseMenu} />}
    </>
  )
}