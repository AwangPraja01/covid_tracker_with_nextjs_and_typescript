import React from "react";
import * as SimpleIcons from "react-icons/si";
import Link from "next/link";

const Header = () => {
  return (
    <div className='p-4 bg-blue-700 flex flex-col justify-center items-center font-open-sans text-white'>
      <div className='flex flex-row items-center mb-1'>
        <span className='text-2xl mr-3'>
          <SimpleIcons.SiPivotaltracker />
        </span>
        <h1 className=' text-3xl font-bold '>Covid-19 Tracker</h1>
      </div>
      <div>
        <h4 className='text-base '>
          <span>Api by </span>
          <span>
            <Link href='#'>coronatracker.com</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Header;
