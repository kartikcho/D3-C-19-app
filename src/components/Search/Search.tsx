import Button from "../Button/Button";

export default function Search() {
	return (
		<div className="container px-5 py-12 mx-auto text-center text-gray-600">
			<div className="flex flex-col text-center w-full mb-20">
				<h1 className="sm:text-5xl text-5xl font-medium title-font mb-6 text-green-800 font-semibold leading-relaxed">
					Have Question in mind?
					<br />
					Let us help you
				</h1>
			</div>
			<div className="flex flex-wrap justify-center">
				<div className="flex w-full justify-center items-end">
					<div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
						<input
							type="text"
							name="email"
                            placeholder="snmonydemo@gmail.com"
							className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-customred text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
                        <Button label="Send" />
					</div>
				</div>
			</div>
		</div>
	);
}
