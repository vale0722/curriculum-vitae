import React from 'react';

const ProgressBar = ({ title, content }) => (
  <>
    <div className='flex items-center justify-between'>
      <span className='text-sm'>{title}</span>
      <span className='min-w-[32px] rounded-full bg-primary-50 p-1 text-center text-xs font-medium'>
        {`${content}`}
      </span>
    </div>
    <div className='my-2 h-2 w-full'>
      <div
        className='h-2 rounded bg-primary-300'
        style={{ width: `${content}%` }}
      />
    </div>
  </>
);

export default ProgressBar;
