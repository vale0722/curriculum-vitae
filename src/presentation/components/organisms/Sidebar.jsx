import React from 'react';
import config from 'domain/config';
import BasicInformation from 'presentation/components/molecules/BasicInformation';
import Languages from 'presentation/components/molecules/Languages';
import Knowledge from 'presentation/components/molecules/Knowledge';
import Networks from 'presentation/components/molecules/Networks';

const Sidebar = () => (
  <aside
    id='sidebar'
    className='absolute left-0 z-50 h-full max-h-screen w-5/6 w-full min-w-fit transform space-y-6 overflow-y-auto rounded-r-3xl bg-white p-0 text-gray-700 shadow-2xl transition duration-200 ease-in-out md:relative md:w-72 md:translate-x-0 lg:flex lg:flex-col'
  >
    <div className='flex max-h-screen flex-col gap-6 p-6 px-6'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex w-full items-end justify-end'>
          <label
            htmlFor='menu-open'
            className='m-2 cursor-pointer rounded-md !bg-transparent p-2 lg:hidden'
          >
            <input type='text' className='hidden' id='menu-open' />
            <img
              className='h-5 w-5'
              src={`${config.statics}icons/times.svg`}
              alt='times'
            />
          </label>
        </div>
        <div className='flex h-28 w-28 items-center justify-center rounded-full bg-primary-300'>
          <img
            className='h-24 w-24 rounded-full'
            src={`${config.statics}profile.jpeg`}
            alt='profile'
          />
        </div>
        <h1 className='text-lg font-extrabold'>VALERIA GRANADA RODAS</h1>
        <h3 className='text-sm font-medium text-gray-400'>
          Desarrolladora full-stack
        </h3>
      </div>
      <hr className='border-1 w-full bg-gray-400' />
      <div className='flex h-4/6 w-full flex-col gap-4 overflow-auto'>
        <BasicInformation />
        <div className='hidden w-full gap-4 text-left md:flex md:flex-col'>
          <hr className='border-1 w-full bg-gray-400' />
          <Languages />
          <Knowledge />
        </div>
      </div>
      <div className='my-6 flex flex-col items-center gap-8'>
        <Networks />
        <a
          href={`${config.statics}docs/cv.pdf`}
          download
          target='_blank'
          className='btn-primary'
          rel='noreferrer'
        >
          <img
            className='h-4 w-4'
            src={`${config.statics}icons/download.svg`}
            alt='download'
          />
          Descargar
        </a>
      </div>
    </div>
  </aside>
);

export default Sidebar;
