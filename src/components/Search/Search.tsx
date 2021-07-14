import Button from '../Button/Button';

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
          <div className="relative lg:w-full xl:w-1/2 w-full md:w-full text-left">
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="w-full bg-white focus:ring-1 focus:ring-customred border border-gray-300 focus:border-customred text-base outline-none text-gray-700 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out rounded-full"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <Button label="Send" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
