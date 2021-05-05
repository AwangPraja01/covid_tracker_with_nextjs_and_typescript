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
    <div className='h-screen relative'>
      <Head>
        <title>Covid - 19 Tracker Website</title>
        <meta
          name='description'
          content='This is a website created to monitor the number of people affected by the Covid 19 virus'
        />
        <link rel='icon' href='/coronavirus.ico' />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <div className='py-6'>
          <DataTitle date={data[0].date} countryName={data[0].country} />
        </div>
        <div className='grid grid-cols-3  px-24 gap-x-8'>
          <div>
            <DataDisplay
              title='deaths'
              backgroundColor='bg-red-500'
              counter={data[0].provinces[0].deaths}
            />
          </div>
          <div>
            <DataDisplay
              title='recovered'
              backgroundColor='bg-green-400'
              counter={data[0].provinces[0].recovered}
            />
          </div>
          <div>
            <DataDisplay
              title='confirmed'
              backgroundColor='bg-yellow-400'
              counter={data[0].provinces[0].confirmed}
            />
          </div>
          <div className='col-span-3 mt-4 '>
            <form onSubmit={handleSubmit}>
              <label>
                <select
                  className='form-select w-full px-1  border-2 rounded'
                  value={country}
                  onChange={handleChange}>
                  <option disabled>Select Country</option>
                  <option value='Italy'>Italy</option>
                  <option value='Afghanistan'>Afghanistan</option>
                  <option value='Algeria'>Algeria</option>
                  <option value='Albania'>Albania</option>
                  <option value='Andorra'>Andorra</option>
                  <option value='Australia'>Australia</option>
                  <option value='Azerbaijan'>Azerbaijan</option>
                  <option value='Bahamas'>Bahamas</option>
                  <option value='Bangladesh'>Bangladesh</option>
                  <option value='Barbados'>Barbados</option>
                  <option value='Belarus'>Belarus</option>
                  <option value='Belgium'>Belgium</option>
                  <option value='Bhutan'>Bhutan</option>
                  <option value='Bolivia'>Bolivia</option>
                  <option value='Brazil'>Brazil</option>
                  <option value='Brunei'>Brunei</option>
                  <option value='Bulgaria'>Bulgaria</option>
                  <option value='Cabo Verde'>Cabo Verde</option>
                  <option value='Cambodia'>Cambodia</option>
                  <option value='Cameroon'>Cameroon</option>
                </select>
              </label>
              <input
                type='submit'
                value='Submit'
                className='mt-2 text-white bg-green-500 px-4 py-1 rounded font-open-sans font-bold'
              />
            </form>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
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
