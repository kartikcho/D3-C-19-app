import axios from 'axios';

import { coordinates } from './countryCoordinates';
import Legend from '../Map/Legend';
import Map from '../Map/Map';
import { useEffect, useState } from 'react';

export default function MapContainer() {
	const [countriesData, setCountriesData] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [query, setQuery] = useState('confirmed');

	const FIELDS = ['confirmed', 'deaths', 'recovered'];
	const COLORS = [
		'rgba(5, 155, 247, 0.7)',
		'rgba(233,30,99,0.7)',
		'rgba(53,211,156,0.7)',
	];

	const processData = (data: any) => {
		let processed = [];

		for (const d of data) {
            // Lazy to type this ugh
			let obj: any | undefined = {
				name: d.name,
				code: d.code,
				flag: `https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${d.code.toLowerCase()}.svg`,
				updated_at: d.updated_at,
				confirmed: d.latest_data.confirmed,
				deaths: d.latest_data.deaths,
				recovered: d.latest_data.recovered,
			};

			// Patch for countries' coordinates
			obj['coordinates'] = {
				latitude:
					coordinates.find((f) => f.country_code === d.code) !== undefined
						? coordinates.find((f) => f.country_code === d.code).latlng[0]
						: 0,
				longitude:
					coordinates.find((f) => f.country_code === d.code) !== undefined
						? coordinates.find((f) => f.country_code === d.code).latlng[1]
						: 0,
			};

			processed.push(obj);
		}

		return processed;
	};

	const fetchCountryData = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: 'https://corona-api.com/countries',
			});

			console.table(response.data.data);
			const countries_data = processData(response.data.data);

			setCountriesData(countries_data as any);
			setDataLoaded(true);
            console.log('pass hogye');
            
		} catch (e) {
			console.log('Failed to retrieve data', e);
		}
	};

    const handleSetQuery = (query: string) => {
        setQuery(query);
    }

	useEffect(() => {
		fetchCountryData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-2/3 w-5/6 mb-10 md:mb-0">
					{dataLoaded ? (
						<div className="root">
							<Legend
								colors={COLORS}
								fields={FIELDS}
								query={query}
								handleSelectLegend={handleSetQuery}
							/>

							<Map
								colors={COLORS}
								data={countriesData}
								fields={FIELDS}
								query={query}
							/>

							<div className="footer">Data source: About-Corona.Net</div>
						</div>
					) : null}
				</div>
				{/* <div className="lg:flex-grow md:w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Before they sold out
						<br className="hidden lg:inline-block" />
						readymade gluten
					</h1>
					<p className="mb-8 leading-relaxed">
						Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
						plant cold-pressed tacos poke beard tote bag. Heirloom echo park
						mlkshk tote bag selvage hot chicken authentic tumeric truffaut
						hexagon try-hard chambray.
					</p>
				</div> */}
			</div>
		</div>
	);
}
