import Head from "next/head";
import Header from "../component/Header";
import DataDisplay from "../component/DataDisplay";
import DataTitle from "../component/DataTitle";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

type Data = {
  country: string;
  provinces: [];
};

const Home: FunctionComponent = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [country, setCountry] = useState("Italy");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: { country },
    });
  };

  console.log(data);

  return (
    <div>
      <Head>
        <title>Covid - 19 Tracker Website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Header />
      </div>

      <main>
        <div className='py-6'>
          <DataTitle />
        </div>
        <div className='grid grid-cols-3  px-24 gap-x-8'>
          <div>
            <DataDisplay
              title='deaths'
              backgroundColor='bg-red-500'
              newCounter={999999}
              totalCounter={99999999}
            />
          </div>
          <div>
            <DataDisplay
              title='recovered'
              backgroundColor='bg-green-400'
              newCounter={999999}
              totalCounter={99999999}
            />
          </div>
          <div>
            <DataDisplay
              title='confirmed'
              backgroundColor='bg-yellow-400'
              newCounter={999999}
              totalCounter={99999999}
            />
          </div>
          <div className='col-span-3 mt-4 '>
            <form onSubmit={handleSubmit}>
              <label>
                <select
                  className='form-select w-full px-1  border-2 rounded'
                  value={country}
                  onChange={handleChange}>
                  <option value='0'>Select Country</option>
                  <option value='Italy'>Italy</option>
                  <option value='Afghanistan'>Afghanistan</option>
                  <option value='Algeria'>Algeria</option>
                </select>
              </label>
              <input
                type='submit'
                value='Submit'
                className='mt-2 bg-green-500 px-4 py-1 rounded font-open-sans font-bold'
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let countryName = context.query.country;

  if (!countryName) {
    countryName = "Italy";
  }

  const res = await fetch(
    `https://covid-19-data.p.rapidapi.com/report/country/name?name=${countryName}&date=2020-04-01`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "842973e442msh6bba104643ab1ddp172f7bjsnc7ae1b09b9a5",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    }
  );

  const data: Data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
};

export default Home;
