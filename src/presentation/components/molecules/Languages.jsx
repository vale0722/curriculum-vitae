import React from 'react';
import config from 'domain/config';
import ProgressBar from 'presentation/components/atoms/ProgressBar';

const Languages = () => (
  <div className='flex flex-col gap-1 text-left'>
    {config.information.languages.map(({ title, content }) => (
      <ProgressBar key={title} title={title} content={content} />
    ))}
  </div>
);

export default Languages;
