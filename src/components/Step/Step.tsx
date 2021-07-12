import Image from 'next/image';

type Props = {
	title: string;
	imgSrc: StaticImageData;
	stepNumber: string;
	inverted?: boolean;
	children: string;
};

type StepProps = {
	title: string;
	stepNumber: string;
	content: string;
};

type StepImageProps = {
	imgSrc: StaticImageData;
};

const StepContent = ({ title, stepNumber, content }: StepProps) => {
	return (
		<div className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
			<div className="flex relative pb-12">
				<div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-100 inline-flex items-center justify-center text-center text-customred font-semibold relative z-10 sm:text-4xl text-4xl">
					{stepNumber}
				</div>
				<div className="flex-grow pl-6 pt-2 text-left">
					<h2 className="sm:text-4xl text-4xl title-font text-sm text-green-800 tracking-wider font-semibold">
						{title}
					</h2>
					<p className="mt-4 leading-loose">{content}</p>
				</div>
			</div>
		</div>
	);
};

const StepImage = ({ imgSrc }: StepImageProps) => {
	return (
		<div className="lg:w-1/2 md:w-1/2 align-middle object-cover object-center rounded-lg md:mt-0 mt-12 m-auto"> 
			<Image src={imgSrc} height="387px" width="378px" layout="fixed" alt="Illustration" />
		</div>
	);
};

export default function Step({
	title,
	imgSrc,
	stepNumber,
	inverted,
	children,
}: Props) {
	return (
		<div className="container px-5 py-24 mx-auto flex flex-wrap">
			<div className="flex flex-wrap w-full">
				{inverted ? (
					<StepImage imgSrc={imgSrc} />
				) : (
					<StepContent
						title={title}
						stepNumber={stepNumber}
						content={children}
					/>
				)}
				{inverted ? (
					<StepContent
						title={title}
						stepNumber={stepNumber}
						content={children}
					/>
				) : (
					<StepImage imgSrc={imgSrc} />
				)}
			</div>
		</div>
	);
}
