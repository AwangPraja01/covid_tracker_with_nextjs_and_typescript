import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  totalCounter: number;
  newCounter: number;
  backgroundColor: string;
};

const DataDisplay: FunctionComponent<Props> = ({
  title,
  totalCounter,
  newCounter,
  backgroundColor,
}) => {
  return (
    <div
      className={`${backgroundColor} rounded-md p-6 font-open-sans font-bold w-full h-48 flex flex-col justify-center items-center`}>
      <div className='mb-6'>
        <span className='capitalize text-3xl '>{title}</span>
      </div>
      <div className='text-lg'>
        <span>New : </span>
        <span className='font-normal'>999,999</span>
      </div>
      <div className='text-lg'>
        <span>Total : </span>
        <span className='font-normal'>999,999</span>
      </div>
    </div>
  );
};

export default DataDisplay;
