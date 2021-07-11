import Head from 'next/head';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';
import Section from '../components/Section/Section';

export default function Home() {
	return (
		<div className="px-2 lg:px-36 bg-gradient-to-b from-red-50 to-white">
			<Head>
				<title>Ugh Another COVID Tracker</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Landing />
			<Section />
			lol
		</div>
	);
}
