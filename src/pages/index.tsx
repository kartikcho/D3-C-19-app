import Head from 'next/head';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';
import Detail from '../components/Detail/Detail';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import SymptomsContainer from '../components/SymptomsContainer/SymptomsContainer';
import StepsContainer from '../components/StepsContainer.tsx/StepsContainer';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import MapContainer from '../components/MapContainer/MapContainer';

export default function Home() {
	return (
		<>
			<div className="bg-gradient-to-b from-red-50 red-50 to-white">
				<Head>
					<title>Ugh Another COVID Tracker</title>
					<meta name="description" content="" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Header />
				<Landing />
			</div>
			<div className="px-0 lg:px-36">
				<Detail />
				<CardsContainer />
				<SymptomsContainer />
				<StepsContainer />
				<MapContainer />
				<Search />
				<Footer />
			</div>
		</>
	);
}
