import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="mt-24 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="row-span-full p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Command the Future, Secure Your Destiny
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Embrace the opportunity to shape our society as a Commander in Gilead. The flag of Gilead symbolizes our shared authority, leadership, and purpose. Join us to secure your place in our legacy.
          </p>

          <div className="mx-auto mt-6 max-w-xs flex-col sm:flex sm:max-w-none sm:justify-center md:flex-row">
            <div>
              <Link
                className="btn mb-4 w-full bg-red-600 text-white hover:bg-red-700 sm:mb-0 sm:w-auto"
                href="/contact">
                Join the Ranks
              </Link>
            </div>
            <div>
              <Link
                className="btn w-full bg-gray-900 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
                href="/blog">
                Learn more
              </Link>
            </div>
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
  );
}