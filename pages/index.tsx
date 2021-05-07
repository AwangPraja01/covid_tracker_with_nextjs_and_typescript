import Head from "next/head";
import Header from "../component/Header";
import DataDisplay from "../component/DataDisplay";
import DataTitle from "../component/DataTitle";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { FunctionComponent, useState, ChangeEvent } from "react";
import { NextRouter, useRouter } from "next/router";
import { IData } from "../Interfaces";
import Footer from "../component/Footer";
import DataDisplayAll from "../component/DataDisplayAll";
import MapBoxDataDisplay from "../component/MapBoxDataDisplay";

const Home: FunctionComponent = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router: NextRouter = useRouter();
  const [country, setCountry] = useState<string>("Italy");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: { country },
    });
  };

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
                className='py-4 p-4 bg-white rounded-md'>
                <option value='Afganistan'>Afganistan</option>
                <option value='USA'>USA</option>
              </select>
            </div>
          </div>
          <div className='flex flex-row'>
            <DataDisplay />
            <DataDisplay />
            <DataDisplay />
          </div>
          <div>
            <MapBoxDataDisplay />
          </div>
        </div>
        <div id='right-section' className='w-2/6'>
          <DataDisplayAll />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let countryName: string | string[] = context.query.country;

  if (!countryName) {
    countryName = "Italy";
  }

  const res: Response = await fetch(
    `https://covid-19-data.p.rapidapi.com/report/country/name?name=${countryName}&date=2020-04-01`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "842973e442msh6bba104643ab1ddp172f7bjsnc7ae1b09b9a5",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    }
  );

  const data: IData = await res.json();

  return {
    props: { data },
  };
};

export default Home;
