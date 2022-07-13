import React from 'react';
import config from 'domain/config';
import CardInfo from 'presentation/components/atoms/CardInfo';

const Additional = () => (
  <div className='flex w-full flex-col gap-6'>
    <h1 className='w-full pb-4 text-left text-2xl font-extrabold'>
      Educación Adicional
    </h1>
    <div className='grid grid-cols-1 gap-4'>
      {config.information.additional.map(({ title, site, dates }) => (
        <CardInfo title={title} subtitle={site} extra={dates} key={title} />
      ))}
    </div>
  </div>
);

export default Additional;
