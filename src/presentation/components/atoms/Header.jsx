import React from 'react';
import config from '../../../domain/config';

const Header = () => (
  <div
    className='relative z-10 flex w-full items-stretch justify-between bg-cover bg-center md:h-72 lg:mt-16 lg:rounded-xl'
    style={{
      height: '631px',
      backgroundImage: `linear-gradient(0deg, rgba(26, 32, 46, 0.6), rgba(26, 32, 46, 0.6)), url(${config.statics}header.jpg)`,
    }}
  >
    <div className='absolute mx-2 flex h-full flex-col items-center justify-center align-middle md:my-20 md:mx-10 md:h-auto lg:m-10'>
      <span className='text-xl font-extrabold uppercase text-white lg:text-3xl'>
        <h1>Valeria</h1>
        <h1>Granada Rodas</h1>
      </span>
      <div className='typewriter text-white'>
        <h1 className='flex flex-col md:flex-row'>
          <div>
            {'<'}
            <span className='text-yellow-500'>code</span>
            {'> '}
          </div>
          Desarrolladora Fullstack
          <div>
            {' </'}
            <span className='text-yellow-500'>code</span>
            {'>'}
          </div>
        </h1>
      </div>
    </div>
    <div className='my-0.5 flex w-full items-end justify-end'>
      <img
        alt='me'
        className='h-60 w-64 lg:w-52'
        src={`${config.statics}me.png`}
      />
    </div>
  </div>
);

export default Header;
