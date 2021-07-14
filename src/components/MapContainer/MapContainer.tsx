import axios from 'axios';

import { coordinates, reports } from './countryCoordinates';
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
          // @ts-ignore
            ? coordinates.find((f) => f.country_code === d.code).latlng[0]
            : 0,
        longitude:
          coordinates.find((f) => f.country_code === d.code) !== undefined
          // @ts-ignore
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

      const countries_data = processData(response.data.data);
      setCountriesData(countries_data as any);
      setDataLoaded(true);
    } catch (e) {
      console.log('Failed to retrieve data', e);
    }
  };

  const handleSetQuery = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    fetchCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center text-gray-600">
      <div className="xl:max-w-4xl lg:max-w-2xl lg:w-full h-full md:w-1/2 sm:w-full w-5/6 mb-10 md:mb-0">
        {dataLoaded ? (
          <div className="map-root">
            <Map
              colors={COLORS}
              data={countriesData}
              fields={FIELDS}
              query={query}
            >
              <Legend
                colors={COLORS}
                fields={FIELDS}
                query={query}
                handleSelectLegend={handleSetQuery}
              />
            </Map>
          </div>
        ) : null}
      </div>
      <div className="lg:flex-grow md:w-1/2 md:ml-16 p-8 flex flex-col text-green-800 bg-white shadow-xl">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold">
          Live Reports
        </h1>
        {reports.map((report, index) => (
          <div key={index} className="flex py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${report.flag}`} alt="flag" />
            <span className="pl-2">{report.name}</span>
            <span className="ml-auto">{report.cases}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
