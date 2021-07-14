import Image from 'next/image';

type Props = {
  label: string;
  children: string;
  imgSrc: StaticImageData;
};

export default function Card({ label, children, imgSrc }: Props) {
  return (
    <div className="h-full border-b-4 border-white rounded-lg overflow-hidden sm-px-2 shadow-2xl hover:border-customred transition duration-200 ease-in-out">
      <div className="object-cover object-center py-4 pt-12">
        <Image width="270px" height="250px" src={imgSrc} alt="Card Image" />
      </div>
      <div className="p-6">
        <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-green-800 font-bold">
          {label}
        </h1>
        <p className="leading-relaxed mb-3">{children}</p>
      </div>
    </div>
  );
}
