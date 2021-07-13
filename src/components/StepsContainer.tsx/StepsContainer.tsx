import Step from '../Step/Step';

import MaskGirl from '../../../public/assets/maskGirl.svg';
import washHandsGirl from '../../../public/assets/washHandsGirl.svg';
import noseRagGirl from '../../../public/assets/noseRagGirl.svg';
import socialDistanceGirl from '../../../public/assets/socialDistanceGirl.svg';

export default function StepsContainer() {
	return (
		<div className="container px-5 py-12 pb-3 mx-auto text-center text-gray-600">
			<div className="flex flex-col text-center w-full mb-5">
				<h3 className="title-font sm:text-2xl text-2xl mb-2 font-medium text-customred font-bold">
					COVID-19
				</h3>
				<h1 className="sm:text-4xl text-4xl font-medium title-font mb-6 text-green-800 font-bold">
					What Should We Do
				</h1>
				<p className="lg:w-1/2 mx-auto leading-relaxed text-base text-gray-600">
					Corona Viruses Are A Type Of Virus. There Are Many Different Kinds,
					And Some Cause Disease. A Newly Identified Type Has Caused
				</p>
			</div>
			<div className="flex flex-wrap">
                <Step title="Wear Masks" stepNumber="01" imgSrc={MaskGirl}>
                Continually Seize Impactful Vortals Rather Than Future-proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tested Meta-services. Competently Pursue Standards Compliant Leadership Skills Vis-a-vis Pandemic &quot;outside The Box&quot; Thinking. Objectively 
                </Step>
                <Step inverted title="Wash Your Hands" stepNumber="02" imgSrc={washHandsGirl}>
                Continually Seize Impactful Vortals Rather Than Future-proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tested Meta-services. Competently Pursue Standards Compliant Leadership Skills Vis-a-vis Pandemic &quot;outside The Box&quot; Thinking. Objectively Continually Seize Impactful Vortals
                </Step>
                <Step title="Use Nose - Rag" stepNumber="03" imgSrc={noseRagGirl}>
                Continually Seize Impactful Vortals Rather Than Future-proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tested Meta-services. Competently Pursue Standards Compliant Leadership Skills Vis-a-vis Pandemic &quot;outside The Box&quot; Thinking. Objectively
                </Step>
                <Step inverted title="Avoid Contacts" stepNumber="04" imgSrc={socialDistanceGirl}>
                Continually Seize Impactful Vortals Rather Than Future-proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tested Meta-services. Competently Pursue Standards Compliant Leadership Skills Vis-a-vis Pandemic
                </Step>
			</div>
		</div>
	);
}
