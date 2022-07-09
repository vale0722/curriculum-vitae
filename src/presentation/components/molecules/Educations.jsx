import React from 'react';
import config from '../../../domain/config';
import CardInfo from '../atoms/CardInfo';

const Educations = () => (
  <>
    <h1 className='w-full pb-4 text-left text-2xl font-extrabold'>
      Formación Académica
    </h1>
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
      {config.information.educations.map(({ title, site, dates }) => (
        <CardInfo title={title} subtitle={site} extra={dates} key={title} />
      ))}
    </div>
  </>
);

export default Educations;
