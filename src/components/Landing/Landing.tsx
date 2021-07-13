import Image from "next/image";
import LandingImage from '../../../public/assets/landing.png'
import Button from "../Button/Button";

export default function Landing() {
	return (
		<div className="text-gray-600 body-font">
			<div className="container mx-auto flex pt-36 px-12 md:flex-row flex-col items-center">
				<div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h3 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-customred font-bold">COVID-19 Alert</h3>
					<h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-green-800 font-bold">
						Stay At Home Quarantine
                        <br className="hidden lg:inline-block" /> To Stop Corona Virus
					</h1>
					<p className="mb-8 leading-relaxed">
                        There Is No Specific Medicine To Prevent Or Treat Coronavirus Disease (Covid-19).
						<br />People May Need Supportive Care To.
					</p>
					<div className="flex justify-center">
						<Button label="Let Us Help" />
					</div>
				</div>
				<div className="w-1/2">
					{/* Add image in landing div background */}
					{/* <Image
						className="object-cover object-center"
						alt="hero"
						src={LandingImage}
					/> */}
				</div>
			</div>
		</div>
	);
}
