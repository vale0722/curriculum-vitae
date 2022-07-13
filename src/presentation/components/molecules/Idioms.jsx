import React from 'react';
import config from 'domain/config';

const Idioms = () => (
  <div className='flex w-full flex-col gap-6'>
    <h1 className='w-full pb-4 text-left text-2xl font-extrabold'>Idiomas</h1>
    <div className='grid gap-4 md:grid-cols-2'>
      {config.information.idioms.map(({ title, value }) => (
        <div
          key={title}
          className='flex flex-col items-center justify-center gap-2'
        >
          <div
            className='radial-progress text-primary-300'
            style={{ '--value': value }}
          >
            <div className='flex h-28 w-28 items-center justify-center rounded-full bg-primary-200 p-2 font-bold text-white'>
              {value}%
            </div>
          </div>
          {title}
        </div>
      ))}
    </div>
  </div>
);

export default Idioms;
