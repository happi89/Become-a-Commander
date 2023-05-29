import Link from 'next/link'
export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0 top-1/2 md:mt-24 lg:mt-0"
        aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 m-auto h-20 w-px translate-y-1/2 transform bg-gray-200 p-px"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-4xl font-bold mb-4">Embrace Authority  </h2>
            <p className="text-x">            
              As Commanders, we are the pillars of Gilead, upholding its sanctity and shaping its future. This is not a role for the faint-hearted, but for those ready to shoulder the weight of authority. As Commander Fred Waterford once said, &quot;Better never means better for everyone... It always means worse, for some.&quot; Secure the future. Become a Commander.
            </p>
          </div>
          <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300">
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
    </section>
  );
}
