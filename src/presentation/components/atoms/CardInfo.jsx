import React from 'react';

const CardInfo = ({ title, subtitle, extra }) => (
  <div
    className='card-info flex h-full flex-col items-center justify-center gap-1 px-4 py-2 text-left duration-150 ease-in-out hover:scale-105'
    key={title}
  >
    <span className='w-full'>{title}</span>
    <span className='w-full text-sm'>{subtitle}</span>
    <span className='w-full text-sm text-gray-300'>{extra}</span>
  </div>
);

export default CardInfo;
