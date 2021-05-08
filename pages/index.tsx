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
  const [country, setCountry] = useState<string>("Afghanistan");
  const [dataType, setDataType] = useState<string>("cases");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.name == "country") {
      setCountry(e.target.value);
    }
  };

  const filteringData = (): {} =>
    data.filter((item: ICountryData) => country == item.country);

  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>Covid - 19 Tracker Website</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
        <meta
          name='description'
          content='This is a website created to monitor the number of people affected by the Covid 19 virus'
        />
        <link rel='icon' href='/coronavirus.ico' />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>

      <main className='flex flex-row justify-around p-5'>
        <div id='left-section' className='w-3/5'>
          <div className='flex flex-row justify-between items-center mb-5'>
            <div>
              <span className='text-3xl font-open-sans font-bold text-red-600'>
                COVID-19 TRACKER
              </span>
            </div>
            <div className='select-wrapper'>
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
          <div className='flex flex-row  '>
            <div
              onClick={() => setDataType("cases")}
              id='cases'
              className={`data-diplay-container shadow-md border-t-8 rounded-md cursor-pointer ${
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
              className={`data-diplay-container shadow-md border-t-8 rounded-md cursor-pointer ${
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
              className={`data-diplay-container shadow-md border-t-8 rounded-md cursor-pointer ${
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
            <MapBoxDataDisplay dataType={dataType} />
          </div>
        </div>
        <div id='right-section' className='w-2/6 h-161'>
          <DataDisplayAll data={data} />
        </div>
      </main>

      <footer className='bg-white  flex items-center justify-between w-full h-20 px-10'>
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
