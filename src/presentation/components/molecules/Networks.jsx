import React from 'react';
import config from 'domain/config';

const Networks = ({ vertical = false }) => (
  <div
    className={`flex ${
      vertical ? 'flex-col' : ''
    } items-center justify-center gap-4`}
  >
    {config.information.networks.map(({ title, content }) => (
      <a
        target='_blank'
        className='cursor-pointer'
        href={content}
        key={title}
        rel='noreferrer'
      >
        <img
          alt={title}
          src={`${config.statics}icons/${title}.svg`}
          className='h-5 w-5'
        />
      </a>
    ))}
  </div>
);

export default Networks;
