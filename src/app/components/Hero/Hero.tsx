import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="aspect-w-16 aspect-h-9 w-full">
      {/* BG IMAGE */}
      <div className="absolute">
        <Image
          priority
          src="/images/tile.jpeg"
          width={2000}
          height={500}
          alt="Rick and Morty hero image"
          className="object-contain"
        />
      </div>
      <div className="bg-gradient-to-t from-black via-transparent" />

      {/* LOGO + BUTTON */}
      <div className="flex flex-col justify-end pl-10">
        <p className="mb-5 font-semibold">[adult swim]</p>
        {/* LOGO */}
        <div className="mb-10 flex w-1/3">
          <Image
            src="/images/hero/logoburnedinleft.png"
            width={1024}
            height={500}
            alt="Rick and Morty logo"
            className="self-end object-contain"
          />
        </div>

        {/* BUTTON */}
        <Link
          href="https://play.hbomax.com/page/urn:hbo:page:GXkRjxwjR68PDwwEAABKJ:type:series"
          className="flex w-fit cursor-pointer flex-row rounded-md bg-gradient-to-r from-royal-blue to-electric-violet  px-10 py-3 align-middle"
        >
          <div className="mr-2 h-5 w-5">
            <Image
              src="/images/hero/person.png"
              width={20}
              height={20}
              alt="person-logo"
              className="self-end object-contain"
            />
          </div>
          <p className="font-semibold leading-5">SIGN IN</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
