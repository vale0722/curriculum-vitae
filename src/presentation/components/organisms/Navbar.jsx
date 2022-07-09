import React from 'react';
import config from '../../../domain/config';

const Navbar = () => (
  <header
    className='fixed z-20 flex grow justify-between bg-gray-300 bg-opacity-40 text-gray-100'
    data-dev-hint='mobile menu bar'
    id='navbar'
  >
    <label
      htmlFor='menu-open'
      id='mobile-menu-button'
      className='m-2 rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none lg:hidden'
    >
      <svg
        id='menu-open-icon'
        className='h-6 w-6 transition duration-200 ease-in-out'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </label>
    <a
      href={`${config.statics}docs/cv.pdf`}
      download
      target='_blank'
      rel='noreferrer'
      className='btn-primary m-4'
    >
      <img
        className='h-4 w-4'
        src={`${config.statics}icons/download.svg`}
        alt='download'
      />
      Descargar
    </a>
  </header>
);

export default Navbar;
