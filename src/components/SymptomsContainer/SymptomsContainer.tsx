import Image from 'next/image';
import Symptoms from '../../../public/assets/symptoms.png';

export default function SymptomsContainer() {
  return (
    <div className="container px-5 py-12 mx-auto text-center text-gray-600">
      <div className="flex flex-col text-center w-full mb-10">
        <h3 className="title-font sm:text-2xl text-2xl mb-2 font-medium text-customred font-bold">
          COVID-19
        </h3>
        <h1 className="sm:text-4xl text-4xl font-medium title-font mb-6 text-green-800 font-bold">
          Symptoms
        </h1>
        <p className="lg:w-1/2 mx-auto leading-relaxed text-base text-gray-600">
          Corona Viruses Are A Type Of Virus. There Are Many Different Kinds,
          And Some Cause Disease. A Newly Identified Type Has Caused A Recent
          Outbreak Of Respiratory
        </p>
      </div>
      <div className="flex flex-wrap mx-auto max-w-4xl">
        <Image src={Symptoms} alt="Symptoms" />
      </div>
    </div>
  );
}
