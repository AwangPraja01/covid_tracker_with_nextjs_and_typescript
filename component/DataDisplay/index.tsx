import React from "react";

interface Props {
  title: string;
  total: number;
  color: string;
  updatedDate: string;
}

const DataDisplay = ({ total, updatedDate, title, color }: Props) => {
  return (
    <div
      className={`data-diplay-container shadow-md border-t-8 rounded-md border-transparent border${color} cursor-pointer `}>
      <span className='text-base font-open-sans'>{title}</span>
      <span className={`text-2xl mb-2 font-open-sans font-bold text${color}`}>
        Total : + {total}
      </span>
      <span className='text-lg font-open-sans font-bold'>{updatedDate}</span>
    </div>
  );
};

export default DataDisplay;
