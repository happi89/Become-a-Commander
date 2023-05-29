"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative sm:mb-[650px] md:mb-0 mb-[1000px]">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0 mb-16 bg-gray-100"
        aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto h-20 w-px -translate-y-1/2 transform bg-gray-200 p-px"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}

            <div
              className="mx-auto max-w-xl md:col-span-7 md:mt-6 md:w-full md:max-w-none lg:col-span-6"
              data-aos="fade-right">
            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="text-2xl font-bold mb-3">Meet Gilead&apos;s Leaders</h3>
                <p className="text-xl text-gray-600"> Meet the influential leaders steering Gilead&apos;s
              course. Here, we spotlight three commanding figures and
              offer a glimpse into their stories. Delve deeper into
              their journeys on our blog.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 1
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-gray-200"
                  }`}
                  href="#0"
                  onClick={e => {
                    e.preventDefault();
                    setTab(1);
                  }}>
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Commander Fred Waterford
                    </div>
                    <div className="text-gray-600">
                     A charismatic pioneer of Gilead, Waterford&apos;s strategic insights have shaped our society&apos;s pillars. Read more.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 2
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-gray-200"
                  }`}
                  href="#0"
                  onClick={e => {
                    e.preventDefault();
                    setTab(2);
                  }}>
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Commander Joseph Lawrence
                    </div>
                    <div className="text-gray-600">
                       The architect of Gilead&apos;s economy, Lawrence&apos;s pragmatic approach ensures our prosperity. Read more.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 3
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-gray-200"
                  }`}
                  href="#0"
                  onClick={e => {
                    e.preventDefault();
                    setTab(3);
                  }}>
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Commander George Putman
                    </div>
                    <div className="text-gray-600">
                      A stalwart upholder of Gilead&apos;s values, Putnam&apos;s leadership reinforces order and discipline. Read more.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6"
              data-aos="zoom-y-out"
              ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16">
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="mx-auto rounded md:max-w-none"
                      src='/../public/img/download.jpeg'
                      width={500}
                      height="462"
                      alt="Features bg"
                    />
                    <Image
                      className="absolute left-0 w-full transform animate-float md:max-w-none"
                      src='/img/fred-waterford-sharp.png'
                      width={500}
                      height={44}
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16">
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="mx-auto rounded md:max-w-none"
                      src='/../public/img/download.jpeg'
                      width={500}
                      height="44"
                      alt="Features bg"
                    />
                    <Image
                      className="absolute left-0 w-full transform animate-float md:max-w-none"
                      src='/img/law-sharp.png'
                      fill={true}
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16">
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="mx-auto rounded md:max-w-none"
                      src='/../public/img/download.jpeg'
                      width={500}
                      height="44"
                      alt="Features bg"
                    />
                    <Image
                      className="absolute left-0 w-full transform animate-float md:max-w-none"
                      src='/img/putman.png'
                      width={400}
                      height={44}
                      alt="Element"
                      style={{ top: "25%" }}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
