'use client';

import { useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';

export default function MenuButton() {
  
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <>
      <button 
        className="cursor-pointer md:hidden"
        onClick={() => setMenuIsActive(true)}
      >
        <Image className="mt-1 mr-1" src='/icon-menu.svg' alt='menu icon' width={17} height={17} />
      </button>
      {menuIsActive && <Menu onClose={() => setMenuIsActive(false)} />}
    </>
  )
}