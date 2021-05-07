import React from "react";

interface Props {}

const DataDisplay = ({}: Props) => {
  return (
    <div className='data-diplay-container shadow-md border-t-8 border-red-500 rounded-md'>
      <span className='text-base font-open-sans'>Coronavirus cases</span>
      <span className='text-2xl mb-2 font-open-sans font-bold text-green-400'>
        Today : +840.4k
      </span>
      <span className='text-lg font-open-sans font-bold'>Total : +156.7m</span>
    </div>
  );
};

export default DataDisplay;
