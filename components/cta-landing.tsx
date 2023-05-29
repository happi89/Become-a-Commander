import Link from 'next/link'
import Image from 'next/image'

export default function CTA() {
  return (

<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-24">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 row-span-full">
    <div
      className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
    >
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
        duis.
      </p>

       <div className='mt-8'>
        <Link
          className="btn mb-4 w-full bg-red-600 text-white hover:bg-red-700 sm:mb-0 sm:w-auto"
          href="/contact">
          Join the Ranks
        </Link>
      </div>
    </div>
  </div>

  <Image
    alt="Student"
    src="/img/gilead-flag.png"
    className="h-56 w-full object-cover sm:h-full"
    width={400}
    height={600}
  />
</section>
  )
}