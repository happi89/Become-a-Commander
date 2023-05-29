import VideoThumb from "@/public/img/gilead-hero-flag.png";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-12 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-4 text-5xl font-extrabold leading-tighter tracking-tighter md:text-6xl"
              data-aos="zoom-y-out">
              Embrace Authority: Command Your
              <span className="bg-gradient-to-r from-[#CB131A] to-[#E92526] bg-clip-text text-transparent">
                &nbsp; Destiny
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150">
                Become a Commander: A Journey Towards Power and
                Leadership in Gilead
              </p>
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

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
