import React, { FunctionComponent } from "react";
import moment from "moment";

type Props = {
  countryName: string;
  date: string;
};

const DataTitle: FunctionComponent<Props> = ({ countryName, date }) => {
  return (
    <div className='flex flex-col justify-center items-center font-open-sans'>
      <h1 className='font-bold text-4xl mb-2'>{countryName}</h1>
      <h4 className='text-lg'>{moment(date).format("DD MMMM YYYY")}</h4>
    </div>
  );
};

export default DataTitle;
