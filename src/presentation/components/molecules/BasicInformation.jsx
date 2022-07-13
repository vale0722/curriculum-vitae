import React from 'react';
import config from 'domain/config';

const BasicInformation = () => (
  <div className='flex flex-col gap-2 text-left'>
    {config.information.basic.map(({ title, content }) => (
      <div className='flex flex-col gap-0.5' key={title}>
        <span className='text-sm font-medium text-gray-400'>{title}</span>
        <span className='truncate text-sm'>{content}</span>
      </div>
    ))}
  </div>
);

export default BasicInformation;
