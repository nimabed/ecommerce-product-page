import Container from './ui/container';
import { Mail } from 'lucide-react';
import { Button } from './ui/button';

export default function JoinCommunity() {
  return (
    <Container className="px-0 bg-dark-grayish-blue/10 my-5 md:rounded-lg">
      <div className="flex flex-col items-center gap-2 p-4 md:flex-row md:p-10">
        <div className="w-full flex items-center gap-5 p-4 md:gap-10 md:p-0">
          <div>
            <Mail strokeWidth={1.5} className="size-10 text-primary md:size-12" />
          </div>
          <div className="space-y-1 md:max-w-[40%]">
            <h2 className="font-bold md:text-lg">Join Our Community</h2>
            <p className="font-medium text-sm text-dark-grayish-blue">Be the first to know about new arrivals, exclusive offers and special discounts.</p>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-full md:justify-end">
          <form className="flex justify-center gap-2 md:justify-end">
            <input
              className="w-full max-w-[60%] px-4 py-2 bg-white text-dark-grayish-blue rounded-md focus:outline-0" 
              type="email"
              placeholder="Enter your email"  
            />
            <Button className="text-white px-5 py-5 bg-primary font-semibold cursor-pointer">Subscribe</Button>
          </form>
        </div>
      </div>
    </Container>
  )
}