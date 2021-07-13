import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

import Tooltip from './Tooltip';

const TOKEN =
	'pk.eyJ1Ijoiam9udGF5eXciLCJhIjoiY2s4aXcwbnA0MGFqYjNscDZicm9haXA3cCJ9.rI3D6Y4ZETQnYukX9RCOow';

type Props = {
	colors: string[];
	data: any;
	query: string;
	fields: string[];
};

export default function Map({ colors, data, query, fields }: Props) {
	const [mapData, setMapData] = useState([]);
	const [tooltip, setTooltip] = useState<any>(null);
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: 0,
		longitude: 0,
		zoom: 2,
	});

	const prepareData = () => {
		const map_data = data.filter((f: { [x: string]: number }) => f[query] > 0);
		const counts = map_data.map((e: { [x: string]: any }) => e[query]);
		const maxCount = Math.max(...counts);
		const minCount = Math.min(...counts);
		const diff = maxCount - minCount;
		const div = diff * 0.2;
		const div2 = diff * 0.8;

		for (const d of map_data) {
			if (d[query] >= div2) {
				d.size = 55;
			} else if (d[query] < div2 && d[query] >= div) {
				d.size = 35;
			} else {
				d.size = 15;
			}

			switch (query) {
				case 'confirmed':
					d.color = colors[0];
					break;
				case 'deaths':
					d.color = colors[1];
					break;
				case 'recovered':
					d.color = colors[2];
					break;
				default:
					d.color = colors[0];
			}
		}

		setMapData(map_data);
	};

	const handleCloseTooltip = () => {
		setTooltip(null);
	};

	useEffect(() => {
		prepareData();
        console.log('data prepared');
        console.log(mapData);
        
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);
	return (
		<ReactMapGL
			{...viewport}
			mapboxApiAccessToken={TOKEN}
			mapStyle="mapbox://styles/mapbox/light-v10"
			onViewportChange={(viewport: any) => setViewport(viewport)}
		>
			{mapData.map(
				(
					country: {
						coordinates: { longitude: any, latitude: any };
						color: any;
						size: any;
					},
					index: React.Key | null
				) => {
					const longitude = Number(country.coordinates.longitude);
					const latitude = Number(country.coordinates.latitude);

					return (
						<Marker key={index} longitude={longitude} latitude={latitude}>
							<div
								className="map-marker"
								style={{
									backgroundColor: country.color,
									height: country.size,
									width: country.size,
								}}
								onClick={() => setTooltip({tooltip: country})}
							/>
						</Marker>
					);
				}
			)}

			{tooltip && (
				<Tooltip
					details={tooltip}
					fields={fields}
					handleCloseTooltip={handleCloseTooltip}
				/>
			)}

			<div className="map-nav">
				<NavigationControl
					onViewportChange={(viewport: any) => setViewport(viewport)}
				/>
			</div>
		</ReactMapGL>
	);
}
