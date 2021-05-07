import Head from "next/head";
import DataDisplay from "../component/DataDisplay";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FunctionComponent, useState, ChangeEvent } from "react";
import DataDisplayAll from "../component/DataDisplayAll";
import MapBoxDataDisplay from "../component/MapBoxDataDisplay";
import { v4 as uuidv4 } from "uuid";
import { ICountryData } from "../Interfaces";

const Home: FunctionComponent = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [country, setCountry] = useState<string>("Afghanistan");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const filteringData = () =>
    data.filter((item: ICountryData) => country == item.country);

  // console.log(filteringData());
  // console.log(data.filter((item) => country == item.country));
  // console.log(data);
  // console.log(countryData[0]);
  // console.log(data.map((names) => names.country));

  return (
    <div className='bg-gray-100 p-5'>
      <Head>
        <title>Covid - 19 Tracker Website</title>
        <meta
          name='description'
          content='This is a website created to monitor the number of people affected by the Covid 19 virus'
        />
        <link rel='icon' href='/coronavirus.ico' />
      </Head>

      <main className='flex flex-row justify-around'>
        <div id='left-section' className='w-3/5'>
          <div className='flex flex-row justify-between items-center mb-5'>
            <div>
              <span className='text-3xl font-open-sans font-bold'>
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
          <div className='flex flex-row'>
            <DataDisplay
              total={filteringData()[0].stats.confirmed}
              updatedDate={filteringData()[0].updatedAt}
            />
            <DataDisplay
              total={filteringData()[0].stats.deaths}
              updatedDate={filteringData()[0].updatedAt}
            />
            <DataDisplay
              total={filteringData()[0].stats.recovered}
              updatedDate={filteringData()[0].updatedAt}
            />
          </div>
          <div className='flex-1'>
            <MapBoxDataDisplay />
          </div>
        </div>
        <div id='right-section' className='w-2/6 h-161'>
          <DataDisplayAll data={data} />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://corona.lmao.ninja/v2/jhucsse`);
  const data = await res.json();

  return {
    props: { data },
  };
};

export default Home;
