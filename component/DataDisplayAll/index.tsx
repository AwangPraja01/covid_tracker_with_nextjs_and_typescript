import React from "react";
import { ICountryData } from "../../Interfaces";
import { v4 as uuidv4 } from "uuid";

interface Props {
  data: [];
}

const DataDisplayAll = ({ data }: Props) => {
  return (
    <div className='bg-white shadow-md flex flex-col p-4 rounded-md h-161 '>
      <div className='flex justify-center mb-5'>
        <span className='font-open-sans text-2xl font-semibold '>
          Live cases by country
        </span>
      </div>
      <div id='table' className='overflow-y-scroll data-display-all'>
        {data.map((item: ICountryData) => (
          <div
            key={uuidv4()}
            className='flex flex-row justify-between item-cell rounded-sm font-open-sans p-2'>
            <span>{item.country}</span>
            <span className='font-semibold'>{item.stats.confirmed}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplayAll;
