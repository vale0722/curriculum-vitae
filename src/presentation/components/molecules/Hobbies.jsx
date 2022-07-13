import React from 'react';
import config from 'domain/config';

const Hobbies = () => (
  <>
    <h1 className='w-full pb-4 text-start text-2xl font-extrabold'>Hobbies</h1>
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {config.information.hobbies.map(({ title, description, img }) => (
        <div
          className='card-sm flex flex-col items-center justify-center justify-between gap-1 overflow-hidden !bg-cover !bg-center text-white duration-150 ease-in-out hover:scale-105'
          style={{
            background: `linear-gradient(0deg, rgba(26, 32, 46, 0.48), rgba(26, 32, 46, 0.48)), url(${config.statics}hobbies/${img})`,
          }}
          key={img}
        >
          <div className='flex h-full w-full flex-col px-4  py-10 backdrop-blur-sm'>
            <span className='text-lg font-bold'>{title}</span>
            <span className='text-sm'>{description}</span>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Hobbies;
