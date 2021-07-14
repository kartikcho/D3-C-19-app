import Image from 'next/image';

export default function VirusImages() {
  return (
    <>
      <span className="hidden md:block absolute right-0 top-auto mt-96 transform translate-y-12">
        <Image
          width="130"
          height="250"
          src="/assets/virusHBigLight.png"
          alt="img"
        />
      </span>

      <span className="hidden md:block absolute right-12 top-auto mt-96 transform translate-y-80">
        <Image
          width="80"
          height="80"
          src="/assets/virusSmallLighter.png"
          alt="img"
        />
      </span>

      <span className="z-0 hidden md:block absolute left-24 top-auto mt-100 transform translate-y-96">
        <Image
          width="130"
          height="130"
          src="/assets/virusBigDark.png"
          alt="img"
        />
      </span>

      <span className="hidden md:block absolute left-0 top-auto mt-106 transform translate-y-96">
        <Image
          width="110"
          height="230"
          src="/assets/virusGreen.png"
          alt="img"
        />
      </span>

      <span className="hidden md:block absolute right-4 bottom-96 mb-102 transform -translate-y-98">
        <Image
          width="80"
          height="80"
          src="/assets/virusGreenLight.png"
          alt="img"
        />
      </span>

      <span className="hidden md:block absolute right-0 bottom-96 mb-100 transform -translate-y-98">
        <Image
          width="130"
          height="250"
          src="/assets/virusHBigDark.png"
          alt="img"
        />
      </span>

      <span className="hidden md:block absolute right-8 bottom-80">
        <Image
          width="80"
          height="80"
          src="/assets/virusSmallLighter.png"
          alt="img"
        />
      </span>

      <span className="hidden md:block absolute right-0 bottom-20">
        <Image
          width="130"
          height="250"
          src="/assets/virusHBigLighter.png"
          alt="img"
        />
      </span>
    </>
  );
}
