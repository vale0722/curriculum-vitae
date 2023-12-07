import React from 'react';
import Header from 'presentation/components/atoms/Header';
import Works from 'presentation/components/molecules/Works';
import Educations from 'presentation/components/molecules/Educations';
import Additional from 'presentation/components/molecules/Additional';
import Idioms from 'presentation/components/molecules/Idioms';
import Hobbies from 'presentation/components/molecules/Hobbies';
import Languages from 'presentation/components/molecules/Languages';
import Knowledge from 'presentation/components/molecules/Knowledge';
import Networks from 'presentation/components/molecules/Networks';
import config from 'domain/config';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='self-center px-12'>
        <div className='card min-h-32 flex flex w-full max-w-full flex-col items-center justify-between p-4 text-center lg:flex-row'>
          <span className='p-6'>
            “Soy una mujer apasionada por el mundo digital; Me gusta sentirme
            constantemente retada y generar valor en cada uno de los proyectos
            que participo. Mi meta diaria es aprender y compartir el
            conocimiento con los demás.”
          </span>
          <div className='flex w-full items-center justify-center gap-6 p-6 text-center text-sm font-bold lg:flex-col'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary-300 text-2xl font-extrabold'>
              {config.information.experience.age}
            </div>
            Años de experiencia
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 px-12 text-left md:hidden'>
        <Languages />
        <Knowledge />
      </div>
      <div className='flex flex-col gap-6 px-12'>
        <Works />
        <Educations />
      </div>
      <div className='flex w-full flex-col gap-6 px-12 lg:flex-row'>
        <Additional />
        <Idioms />
      </div>
      <div className='flex flex-col gap-6 px-12'>
        <Hobbies />
      </div>
      <div className='my-6 flex flex-col items-center gap-8 md:hidden'>
        <Networks />
      </div>
    </>
  );
}
