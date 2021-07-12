import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../../public/assets/logo.png';

export default function Footer() {
	return (
		<footer className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<div className="flex title-font font-medium items-center text-green-800 mb-4 md:mb-0">
					<Image height="60px" width="60px" alt="Logo" src={Logo} />
					<Link href="/" passHref>
						<span className="ml-3 font-bold text-lg cursor-pointer">
							COVID-19
						</span>
					</Link>
				</div>
				<div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<Link href="/" passHref>
						<span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer text-green-800">
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
						<span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer text-green-800">
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
						<span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer text-green-800">
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
						<span className="px-6 py-2 hover:text-customred transition duration-200 ease-in-out cursor-pointer text-green-800">
							Prevention
						</span>
					</Link>
				</div>
				<span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
				</span>
			</div>
		</footer>
	);
}
