import React from 'react';
import config from 'domain/config';

const Knowledge = () => (
  <>
    <span className='text-sm font-bold'>Conocimiento:</span>
    <ul className='flex flex-col gap-2 text-left'>
      {config.information.knowledge.map((content) => (
        <li className='flex items-center gap-3 text-sm' key={content}>
          <img
            alt='check'
            src={`${config.statics}icons/check.svg`}
            className='h-3 w-3'
          />
          {content}
        </li>
      ))}
    </ul>
  </>
);

export default Knowledge;
