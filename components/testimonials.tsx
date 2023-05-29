import Image from "next/image";

export default function Testimonials() {
  const info = [
    {
      name: "Fred Waterford",
      description:
        "A charismatic leader, Commander Waterford played a key role in shaping the foundational policies of Gilead. His visionary leadership continues to inspire upcoming Commanders.",
      src: '/img/fred-waterford-sharp.png'
      
    },
    {
      name: "Joseph Lawrence",
      description:
        "Known for his utilitarian ideas, Commander Lawrence has been instrumental in establishing social structures in Gilead. His unique approach has paved the way for innovative leadership.",
        src: '/img/law-sharp.png'
    },
    {
      name: "Ray Cushing",
      description:
        "An assertive and powerful figure, Commander Cushing's stringent enforcement of law and order reflects his unwavering commitment to Gilead's values.",
        src: '/img/cushing-sharp.png'
    }
  ];

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -mb-32 -translate-x-1/2 transform"
        aria-hidden="true">
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-6 text-center md:pb-12">
            <h2 className="mb-4 text-4xl font-bold">
              Trailblazers of Gilead
            </h2>
            <p className="text-x">
              It is our honor to showcase a few of our illustrious
              alumni who, through their leadership and commitment,
              have made significant contributions to Gilead:
            </p>
          </div>

          {/* Testimonials */}
          <div
            className="mx-auto mt-4 m-0 max-w-2xl h-full flex flex-col gap-4"
            data-aos="zoom-y-out">
              {info.map(i => {
                return (
                  <article key={i.name} className="rounded-xl border-2 border-gray-100 bg-white">
  <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
    <a href="#" className="block shrink-0">
      <Image
        alt="Speaker"
        src={i.src}
        width={100}
        height={100}
        className="h-14 w-14 rounded-lg object-cover"
      />
    </a>

    <div>
      <h3 className="font-medium sm:text-lg">
          {i.name}
      </h3>

      <p className="line-clamp-3 text-sm text-gray-700">
        {i.description}
      </p>

    </div>
  </div>
</article>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
