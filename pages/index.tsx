import Head from "next/head";
import DataDisplay from "../component/DataDisplay";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FunctionComponent, useState, ChangeEvent } from "react";
import DataDisplayAll from "../component/DataDisplayAll";
import MapBoxDataDisplay from "../component/MapBoxDataDisplay";
import { v4 as uuidv4 } from "uuid";
import { ICountryData } from "../Interfaces";
import Footer from "../component/Footer";

const Home: FunctionComponent = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [country, setCountry] = useState<string>("Indonesia");
  const [dataType, setDataType] = useState<string>("cases");

  const filteringData = (): {} =>
    data.filter((item: ICountryData) => country == item.country);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCountry(e.target.value);
  };

  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>Covid - 19 Tracker Website</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
        <meta
          name='description'
          content='The calculation of the number of deaths, the number of cures, and the number of confirmed cases of the corona virus (COVID-19), in the last weeks for which data is available. Website Covid 19 tracker personal project made with next js.'
        />
        <link rel='icon' href='/coronavirus.ico' />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>

      <main className='flex flex-col lg:flex-row justify-around p-5'>
        <div id='left-section' className='w-full lg:w-3/5'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-5'>
            <div>
              <span className='text-3xl font-open-sans font-bold text-red-600'>
                COVID-19 TRACKER
              </span>
            </div>
            <div className='select-wrapper mt-4 md:mt-0'>
              <select
                name='country'
                id='country'
                className='py-4 p-4 bg-white rounded-md'
                onChange={handleChange}
                value={country}>
                {data.map((item) => (
                  <option key={uuidv4()} value={item.country}>
                    {item.country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col md:flex-row '>
            <div
              onClick={() => setDataType("cases")}
              id='cases'
              className={`data-diplay-container ${
                dataType === "cases" ? "border-red-500" : "border-transparent"
              }`}>
              <DataDisplay
                title='Coronavirus cases'
                total={filteringData()[0].stats.confirmed}
                color='-red-500'
                updatedDate={filteringData()[0].updatedAt}
              />
            </div>
            <div
              onClick={() => setDataType("recovered")}
              id='recovered'
              className={`data-diplay-container ${
                dataType === "recovered"
                  ? "border-green-500"
                  : "border-transparent"
              }`}>
              <DataDisplay
                title='Recovered'
                total={filteringData()[0].stats.recovered}
                color='-green-500'
                updatedDate={filteringData()[0].updatedAt}
              />
            </div>
            <div
              onClick={() => setDataType("deaths")}
              id='deaths'
              className={`data-diplay-container ${
                dataType === "deaths" ? "border-red-700" : "border-transparent"
              }`}>
              <DataDisplay
                title='Deaths'
                total={filteringData()[0].stats.deaths}
                color='-red-700'
                updatedDate={filteringData()[0].updatedAt}
              />
            </div>
          </div>
          <div>
            <MapBoxDataDisplay country={country} dataType={dataType} />
          </div>
        </div>
        <div
          id='right-section'
          className='w-full mt-5 lg:mt-0 lg:w-2/6 lg:h-161'>
          <DataDisplayAll data={data} />
        </div>
      </main>

      <footer className='bg-white flex items-center justify-between w-full  md:h-20 px-10 py-4 md:py-0'>
        <Footer />
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://corona.lmao.ninja/v2/jhucsse`);
  const data: ICountryData[] = await res.json();

  return {
    props: { data },
  };
};

export default Home;
