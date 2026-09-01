import Container from './ui/container';
import Link from 'next/link';
import Image from 'next/image';
import { Copyright } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const footerLinks = [
  {
    title: "Shop",
    links: ["All Sneakers", "Men", "Women", "Collections"]
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Stores"]
  },
  {
    title: "Help",
    links: ["FAQ", "Shipping", "Returns", "Size Guide"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookies"]
  },
]

export default function Footer() {
  return (
    <Container>
      <div className="block md:flex">
        {/* Logo Section */}
        <div className="space-y-3 pb-5 border-b border-b-grayish-blue md:border-b-0 md:flex-1 md:pb-0">
          <div className="w-full max-w-30 md:max-w-32">
            <Image
              className="size-full"
              src="/logo.svg"
              alt="logo image"
              width={50}
              height={50}
            />
          </div>
          <p className="font-medium text-sm text-dark-grayish-blue max-w-55 md:text-base md:max-w-60">Premium sneakers for everyday lifestyle and performance.</p>
          <div className="w-full max-w-32 flex items-center justify-between mt-5">
            <Link href="#">
              <Image className="size-5" src="/instagram-logo.svg" alt="Instagram logo icon" width={50} height={50} />
            </Link>
            <Link href="#">
              <Image className="size-4" src="/facebook-logo.svg" alt="Facebook logo icon" width={50} height={50} />
            </Link>
            <Link href="#">
              <Image className="size-5" src="/twitter-logo.svg" alt="Twitter logo icon" width={50} height={50} />
            </Link>
            <Link href="#">
              <Image className="size-5" src="/pinterest-logo.svg" alt="Pinteset logo icon" width={50} height={50} />
            </Link>
          </div>
        </div>
        {/* Mobile Links */}
        <Accordion multiple className="md:hidden">
          {
            footerLinks.map(item =>
              <AccordionItem key={item.title} value={item.title} className="border-b-grayish-blue">
                <AccordionTrigger className="font-bold">{item.title}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-1 pl-2 text-dark-grayish-blue">
                  {
                    item.links.map(link => 
                      <Link key={link} href="#" style={{textDecorationLine: "none"}}>{link}</Link>
                    )
                  }
                </AccordionContent>
              </AccordionItem>
            )
          }
        </Accordion>
        {/* Desktop Links */}
        <div className="hidden flex-2 justify-between items-center md:flex">
          {
            footerLinks.map((item, index) => 
              <div key={item.title} className={cn("w-full flex flex-col",
                index === footerLinks.length - 1 && "self-start"
              )}>
                <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                <div className="flex flex-col gap-1 font-medium text-dark-grayish-blue">
                  {
                    item.links.map(link => 
                      <Link key={link} href="#">{link}</Link>
                    )
                  }
                </div>  
              </div>

            )
          }
        </div>
      </div>
      {/* Copyright Section */}
      <div className="flex items-center text-sm justify-center pt-5 text-dark-grayish-blue md:justify-start md:pt-2">
        <Copyright className="size-3 mr-1" />
        2026 Sneakers. All rights reserved.
      </div>
    </Container>
  )
}