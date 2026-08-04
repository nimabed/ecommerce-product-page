import Link from 'next/link';

export default function notFound() {
  return (
    <div className="flex justify-center items-center flex-1">
      <div className="w-full max-w-[375px] md:max-w-[600px] flex flex-col space-y-4 items-center">
        <h1 className="text-7xl uppercase text-primary font-extrabold tracking-tight md:text-9xl">Oh snap!</h1>
        <span className="text-7xl text-yellow-700 font-extrabold md:text-9xl">404</span>
        <p className="uppercase text-3xl font-bold text-center w-full max-w-[90%] md:text-4xl">We've lost your footprint. Even our best trackers can't find this trail.</p>
        <p className="text-xl text-center mt-2 text-dark-grayish-blue">Don't panic! Our trail guides tell us this page has slipped through the cracks. But we have many more trails for you.</p>
        <Link href="/" className="w-full p-3 rounded-lg bg-primary font-bold text-center text-lg uppercase mt-2 md:max-w-[90%] md:text-xl">Resume the trail: Back to hq</Link>
      </div>
    </div>
  )
}