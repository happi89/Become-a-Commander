import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  const imageProps = urlForImage(authors[0]?.image) || null;

  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16">
              <Image
                src={imageProps?.src}
                alt={author.name || " "}
                fill
                sizes="(max-width: 320px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
      {/* <div
        key={authors[0]._id}
        className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16">
        <Link href={`/author/${authors[0].slug}`}>
          <Image
            src={imageProps?.src}
            alt={authors[0].name || " "}
            fill
            sizes="(max-width: 320px) 100vw, 320px"
            className="object-cover"
          />
        </Link>
      </div> */}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Welcome to &apos;Becoming a Commander,&apos; a unique blog
          dedicated to exploring the compelling universe of &apos;The
          Handmaid&apos;s Tale&apos; through the lens of its most
          influential figures - the Commanders.
        </p>
        <p>
          This blog serves as a platform for examining the intricate
          fabric of the dystopian society of Gilead, with a particular
          focus on the Commanders. These men, at the pinnacle of
          Gilead&apos;s power structure, embody the contradictions and
          complexities of this authoritarian regime.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
