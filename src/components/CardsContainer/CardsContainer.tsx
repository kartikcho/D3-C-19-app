import Card from '../Card/Card';

import wearMask from '../../../public/assets/wearmask.svg';
import washHands from '../../../public/assets/washhands.png';
import cup from '../../../public/assets/cup.svg';

export default function CardsContainer() {
  return (
    <div className="container px-5 py-12 mx-auto text-center text-gray-600">
      <div className="flex flex-col text-center w-full mb-20">
        <h3 className="title-font sm:text-2xl text-2xl mb-2 font-medium text-customred font-bold">
          COVID-19
        </h3>
        <h1 className="sm:text-4xl text-4xl font-medium title-font mb-6 text-green-800 font-bold">
          Contagion
        </h1>
        <p className="lg:w-1/2 mx-auto leading-relaxed text-base text-gray-600">
          Corona Viruses Are A Type Of Virus. There Are Many Different Kinds,
          And Some Cause Disease. A Newly Identified Type
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-md p-4 md:w-1/3">
          <Card label="Air Transmission" imgSrc={wearMask}>
            Objectively Evolve Tactical Expertise Before Extensible Initiatives.
            Efficiently Simplify
          </Card>
        </div>
        <div className="max-w-md p-4 md:w-1/3">
          <Card label="Human Contacts" imgSrc={washHands}>
            Washing Your Hands Is One Of The Simplest Ways You Can Protect
          </Card>
        </div>
        <div className="max-w-md p-4 md:w-1/3">
          <Card label="Containted Objects" imgSrc={cup}>
            Use The Tissue While Sneezing,in This Way, You Can Protect Your
            Droplets.
          </Card>
        </div>
      </div>
    </div>
  );
}
