import React from "react";
import { ICountryData } from "../../Interfaces";

interface Props {
  total: number;
  updatedDate: string;
}

const DataDisplay = ({ total, updatedDate }: Props) => {
  // const filteringData = () =>
  //   countryData.filter((item: ICountryData) => countryName == item.country);

  return (
    <div className='data-diplay-container shadow-md border-t-8 border-red-500 rounded-md'>
      <span className='text-base font-open-sans'>Coronavirus cases</span>
      <span className='text-2xl mb-2 font-open-sans font-bold text-green-400'>
        Total : + {total}
      </span>
      <span className='text-lg font-open-sans font-bold'>{updatedDate}</span>
    </div>
  );
};

export default DataDisplay;
