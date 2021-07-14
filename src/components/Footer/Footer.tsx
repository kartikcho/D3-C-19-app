import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../../public/assets/logo.png';
import Socials from '../../../public/assets/socials.png';

export default function Footer() {
  return (
    <footer>
      <div className="container px-5 mb-4 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-green-800 mb-4 md:mb-0">
          <Image height="60px" width="60px" alt="Logo" src={Logo} />
          <Link href="/" passHref>
            <span className="ml-3 font-bold text-lg cursor-pointer">
              COVID-19
            </span>
          </Link>
        </div>
        <div className="md:mx-auto flex flex-wrap items-center text-base justify-center text-green-800">
          <Link href="/" passHref>
            <span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer">
              Overview
            </span>
          </Link>
          <Link
            href={{
              pathname: '/',
              query: { ref: 'contagion' },
            }}
            passHref
          >
            <span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer">
              Contagion
            </span>
          </Link>
          <Link
            href={{
              pathname: '/',
              query: { ref: 'symptoms' },
            }}
            passHref
          >
            <span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer">
              Symptoms
            </span>
          </Link>
          <Link
            href={{
              pathname: '/',
              query: { ref: 'prevention' },
            }}
            passHref
          >
            <span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer">
              Prevention
            </span>
          </Link>
        </div>
        {/* Hacky implementation to save time */}
        <div className="inline-flex lg:mt-0 lg:mb-0 mt-6 mb-6 w-full justify-center md:justify-start md:w-auto">
          <Image height="20px" width="150px" alt="Socials" src={Socials} />
        </div>
      </div>
      <span className="mt-6 mb-2 flex justify-center text-green-800">
        Made with ❤ by KC
      </span>
    </footer>
  );
}
