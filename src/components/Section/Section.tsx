import Image from 'next/image';
import VirusImg from '../../../public/assets/illustration1.png';
import Button from '../Button/Button';

export default function Section() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="w-1/2 mb-10 md:mb-0">
					<Image
						className="object-cover object-center"
						alt="hero"
						src={VirusImg}
					/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Knausgaard typewriter readymade marfa
					</h1>
					<div className="flex lg:flex-row md:flex-col">
                        <Button label="Learn More" />
					</div>
				</div>
			</div>
            
		{/* <section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2">
					<Image
						className="object-cover object-center"
						alt="hero"
						src={VirusImg}
					/>
				</div>
				<div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h3 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-customred">COVID-19 Alert</h3>
					<h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
						Stay At Home Quarantine
                        <br className="hidden lg:inline-block" /> To Stop Corona Virus
					</h1>
					<p className="mb-8 leading-relaxed">
                        There Is No Specific Medicine to Prevent or Treat Coronavirus Disease (Covid-19). People May Need Supportive Care to.
					</p>
					<div className="flex justify-center">
						<Button label="Let Us Help" />
					</div>
				</div>
			</div>
		</section> */}
		</section>
	);
}
