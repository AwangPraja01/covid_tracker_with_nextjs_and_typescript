import React from "react";

interface Props {
  title: string;
  counter: number;
  backgroundColor: string;
}

const DataDisplay = ({ title, counter, backgroundColor }: Props) => {
  return (
    <div
      className={`${backgroundColor} rounded-md p-6 font-open-sans font-bold w-full h-48 flex flex-col justify-center items-center`}>
      <div className='mb-6'>
        <span className='capitalize text-3xl '>{title}</span>
      </div>
      <div className='text-lg'>
        <span>Total : </span>
        <span className='font-normal'>{counter}</span>
      </div>
    </div>
  );
};

export default DataDisplay;
