import { Fragment } from 'react';
import { Truck, ShieldCheck, Repeat, Headset } from 'lucide-react';

const howItWorks = [
  {
    title: "Free Shipping",
    caption: "On all orders over $100",
    icon: <Truck className="size-9 text-primary hover:scale-105 md:size-11" strokeWidth={1.5} />
  },
  {
    title: "Secure Payment",
    caption: "100% secure checkout",
    icon: <ShieldCheck className="size-9 text-primary hover:scale-105 md:size-10" strokeWidth={1.5} />
  },
  {
    title: "Easy Returns",
    caption: "30-day return policy",
    icon: <Repeat className="size-9 text-primary hover:scale-105 md:size-10" strokeWidth={1.5} />
  },
  {
    title: "24/7 Support",
    caption: "We're here to help",
    icon: <Headset className="size-9 text-primary hover:scale-105 md:size-10" strokeWidth={1.5} />
  }
]

export default function HowItWorks() {

  return (
    <section className="flex flex-col gap-5 py-5 md:py-8 md:flex-row md:justify-between md:items-center">
      {
        howItWorks.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="flex items-center justify-start gap-5 pl-10 md:pl-0">
                <div>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{item.title}</h3>
                  <p className="text-dark-grayish-blue md:text-lg">{item.caption}</p>
                </div>
              </div>
              {index < howItWorks.length - 1 && (
                <div className="hidden w-0.5 h-8 bg-dark-grayish-blue/10 rounded-full md:block" />
              )}
            </Fragment>
          )
        }
        )
      }
    </section>
    
  )
}