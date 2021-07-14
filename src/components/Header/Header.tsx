import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import cx from 'classnames';

import Logo from '../../../public/assets/logo.png';

export default function Header() {
  // Could've done the same with state but wanted to flex query params
  const [activeRef, setActiveRef] = useState('index');
  const router = useRouter();

  const setActive = () => {
    const ref = router.query.ref;
    switch (ref) {
      case 'contagion':
        setActiveRef(ref);
        break;
      case 'symptoms':
        setActiveRef(ref);
        break;
      case 'prevention':
        setActiveRef(ref);
        break;
      default:
        setActiveRef('index');
    }
  };

  useEffect(() => {
    if (router.isReady) {
      setActive();
    }
    // router doesn't get query object on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    // TODO: Use react helmet?
    <header className="text-green-800 body-font md:mx-36 mx-auto">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-green-800 mb-4 md:mb-0">
          <Image height="60px" width="60px" alt="Logo" src={Logo} />
          <Link href="/" passHref>
            <span className="ml-3 font-bold text-lg cursor-pointer">
              COVID-19
            </span>
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" passHref>
            <span
              className={cx(
                'px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer',
                {
                  'text-customred': activeRef === 'index',
                }
              )}
            >
              Overview
              <div
                className={cx('h-1 w-1 mx-auto bg-white rounded', {
                  'bg-customred': activeRef === 'index',
                })}
              ></div>
            </span>
          </Link>
          <Link
            href={{
              pathname: '/',
              query: { ref: 'contagion' },
            }}
            passHref
          >
            <span
              className={cx(
                'px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer',
                {
                  'text-customred': activeRef === 'contagion',
                }
              )}
            >
              Contagion
              <div
                className={cx('h-1 w-1 mx-auto bg-white rounded', {
                  'bg-customred': activeRef === 'contagion',
                })}
              ></div>
            </span>
          </Link>
          <Link
            href={{
              pathname: '/',
              query: { ref: 'symptoms' },
            }}
            passHref
          >
            <span
              className={cx(
                'px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer',
                {
                  'text-customred': activeRef === 'symptoms',
                }
              )}
            >
              Symptoms
              <div
                className={cx('h-1 w-1 mx-auto bg-white rounded', {
                  'bg-customred': activeRef === 'symptoms',
                })}
              ></div>
            </span>
          </Link>
          <Link
            href={{
              pathname: '/',
              query: { ref: 'prevention' },
            }}
            passHref
          >
            <span
              className={cx(
                'px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer',
                {
                  'text-customred': activeRef === 'prevention',
                }
              )}
            >
              Prevention
              <div
                className={cx('h-1 w-1 mx-auto bg-white rounded', {
                  'bg-customred': activeRef === 'prevention',
                })}
              ></div>
            </span>
          </Link>
          <button className="ml-3 px-8 py-2 hover:bg-customred hover:text-white rounded-full border-2 border-customred text-customred transition duration-200 ease-in-out">
            <Link href="/">Contact</Link>
          </button>
        </nav>
      </div>
    </header>
  );
}
