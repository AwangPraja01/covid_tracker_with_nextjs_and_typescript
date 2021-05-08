import React from "react";
import * as SimpleIcons from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='flex-1 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex justify-center'>
        <span className='font-open-sans text-center md:text-left text-sm md:text-lg font-semibold'>
          Copyright &copy; 2021 Awang Praja Anugerah
        </span>
      </div>
      <div className='flex flex-row mt-4 md:mt-0'>
        <span className='social-media-icon '>
          <Link href='https://github.com/AwangPraja01/covid_tracker_with_nextjs_and_typescript/tree/v.2.0.0'>
            <a target='_blank' rel='noopener noreferrer'>
              <SimpleIcons.SiGithub />
            </a>
          </Link>
        </span>
        <span className='social-media-icon'>
          <Link href='https://www.facebook.com/awang.pa.714/'>
            <a target='_blank' rel='noopener noreferrer'>
              <SimpleIcons.SiFacebook />
            </a>
          </Link>
        </span>
        <span className='social-media-icon'>
          <Link href='https://www.instagram.com/awangpa1020/'>
            <a target='_blank' rel='noopener noreferrer'>
              <SimpleIcons.SiInstagram />
            </a>
          </Link>
        </span>
        <span className='social-media-icon'>
          <Link href='mailto:awangpa9@gmail.com?subject=Covid%20-%2019%20Tracker&body=Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%2C%20adipisicing%20elit.%20Mollitia%20voluptatibus%20amet%20pariatur%20repellendus%20modi%20eius%20maxime%20totam%20explicabo%20harum%20adipisci%20suscipit%2C%20possimus%2C%20molestiae%20maiores%20distinctio%20vitae%20porro%20sunt%20quod%20repudiandae%3F'>
            <a target='_blank' rel='noopener noreferrer'>
              <SimpleIcons.SiGmail />
            </a>
          </Link>
        </span>
        <span className='social-media-icon'>
          <Link href='https://www.youtube.com/channel/UCK_o0svUHaJkoWKwwICBVzg'>
            <a target='_blank' rel='noopener noreferrer'>
              <SimpleIcons.SiYoutube />
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
