import React from 'react';
import config from '../../../domain/config';

const Works = () => (
  <>
    <h1 className='w-full pb-4 text-start text-2xl font-extrabold'>
      Experiencia Laboral
    </h1>
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {config.information.works.map(({ logo, title, dates }) => (
        <div
          className='card-sm flex flex-col items-center justify-center gap-1 px-4 py-10 duration-150 ease-in-out hover:scale-105'
          key={title}
        >
          <img
            alt={title}
            src={`${config.statics}works/${logo}`}
            className='h-8 w-28'
          />
          <div className='flex flex-col'>
            <span>{title}</span>
            <span className='text-sm text-gray-300'>{dates}</span>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Works;
