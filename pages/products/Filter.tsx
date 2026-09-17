'use client'
import { useRef, useState } from 'react';
import Container from '@/components/ui/container';
import Modal, {type modalRef } from '@/components/ui/Modal';
import { Button } from '@/components/ui/button';
import { Funnel, ChevronDown, X } from 'lucide-react';
import FilterContents from './FilterContents';
import SortContents from './SortContents';

export default function Filter() {

  const dialogRef = useRef<modalRef>(null);
  const [content, setContent] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  function closeModal() {
    setIsClosing(true);
    setTimeout(() => {
      dialogRef.current?.close();
      setIsClosing(false);
    }, 400)
  }

  function filterButtonHandler() {
    setContent('filter');
    dialogRef.current?.open();
  }

  function sortButtonHandler() {
    setContent('sort');
    dialogRef.current?.open();
  }

  return (
    <div className="md:hidden">
      <Modal 
        ref={dialogRef}
        closeManually={closeModal}
      >
        {content === 'filter' && <FilterContents isClosing={isClosing} onClose={() => closeModal()} />}
        {content === 'sort' && <SortContents isClosing={isClosing} onClose={() => closeModal()} />}
      </Modal>
      <Container className="space-y-2 py-5">
        {/* Filter/Sort Buttons Sections */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline"
            className="py-2 px-6 font-semibold "
            onClick={filterButtonHandler}
          >
            <Funnel className="text-primary" />
            Filters
          </Button>
          <Button 
            variant="outline"
            className="py-2 px-6 font-semibold "
            onClick={sortButtonHandler}  
          >
            Sort
            <ChevronDown />  
          </Button>
        </div>
        {/* Result Section */}
        <div>
          <span className="text-sm text-dark-grayish-blue">Showing 1-12 of 48 products</span>
        </div>
        {/* Filter tags Section */}
        <div className="space-x-2">
          <Button variant="label" size="lg">
            Men
            <X className="text-dark-grayish-blue" />
          </Button>
          <Button variant="label" size="lg">
            Sneakers
            <X className="text-dark-grayish-blue" />
          </Button>
          <Button variant="link">
            Clear all
          </Button>
        </div>
      </Container>
    </div>
  )
}