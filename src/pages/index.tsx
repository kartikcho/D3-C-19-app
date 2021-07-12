import Head from 'next/head';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';
import Detail from '../components/Detail/Detail';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import SymptomsContainer from '../components/SymptomsContainer/SymptomsContainer';
import StepsContainer from '../components/StepsContainer.tsx/StepsContainer';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';

export default function Home() {
	return (
		<div className="px-0 lg:px-36 bg-gradient-to-b from-red-50 via-white to-white">
			<Head>
				<title>Ugh Another COVID Tracker</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Landing />
			<Detail />
			<CardsContainer />
			<SymptomsContainer />
			<StepsContainer />
			<Search />
			<Footer />
		</div>
	);
}
