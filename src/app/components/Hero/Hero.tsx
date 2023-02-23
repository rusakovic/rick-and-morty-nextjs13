import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full aspect-w-16 aspect-h-9">
      {/* BG IMAGE */}
      <div className="absolute">
        <Image
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
        <p className="font-semibold mb-5">[adult swim]</p>
        {/* LOGO */}
        <div className="w-1/3 flex mb-10">
          <Image
            src="/images/hero/logoburnedinleft.png"
            width={1024}
            height={500}
            alt="Rick and Morty logo"
            className="object-contain self-end"
          />
        </div>

        {/* BUTTON */}
        <Link
          href="https://play.hbomax.com/page/urn:hbo:page:GXkRjxwjR68PDwwEAABKJ:type:series"
          className="flex flex-row cursor-pointer align-middle rounded-md w-fit px-10 py-3  bg-gradient-to-r from-royal-blue to-electric-violet"
        >
          <div className="w-5 h-5 mr-2">
            <Image
              src="/images/hero/person.png"
              width={20}
              height={20}
              alt="person-logo"
              className="object-contain self-end"
            />
          </div>
          <p className="font-semibold leading-5">SIGN IN</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
