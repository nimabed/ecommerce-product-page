'use client'
import { useRef, useState } from 'react';
import Container from '@/components/ui/container';
import Modal, {type modalRef } from '@/components/ui/Modal';
import { Button } from '@/components/ui/button';
import { Funnel, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import FilterContents from './FilterContents';

export default function Filter() {

  const dialogRef = useRef<modalRef>(null);
  const [isClosing, setIsClosing] = useState(false);

  function closeModal() {
    setIsClosing(true);
    setTimeout(() => {
      dialogRef.current?.close();
      setIsClosing(false);
    }, 250)
  }

  return (
    <>
      <Modal 
        ref={dialogRef}
        closeManually={closeModal}
      >
        <div className={cn("absolute size-full bottom-0 duration-300 bg-white", 
          isClosing ? "animate-out slide-out-to-bottom" : "animate-in slide-in-from-bottom"
        )}>
          <FilterContents onClose={() => closeModal()} />
        </div>
      </Modal>
      <Container className="flex items-center justify-between">
        <Button 
          className="bg-white py-2 px-5 border-dark-grayish-blue/20 font-semibold cursor-pointer active:translate-y-0!"
          onClick={() => dialogRef.current?.open()}
        >
          <Funnel className="text-primary" />
          Filters
        </Button>
        <Button className="bg-white py-2 px-5 border-dark-grayish-blue/20 font-semibold cursor-pointer active:translate-y-0!">
          Sort
          <ChevronDown />  
        </Button>
      </Container>
    </>
  )
}