import React from 'react';
import '../assets/styles/navbar.scss';
import { Sidebar, Navbar } from '../components/organisms';
import Networks from '../components/molecules/Networks';

export default function Layout({ children }) {
  return (
    <div id='app' className='App '>
      <input type='checkbox' id='menu-open' className='hidden' />
      <div id='overlay' />
      <div
        className='relative min-h-screen lg:flex'
        id='container'
        data-dev-hint='container'
      >
        <Sidebar />
        <div id='main' className='grow'>
          <Navbar />
          <main className='flex h-full flex-col gap-8 overflow-scroll lg:px-8 lg:py-6'>
            {children}
          </main>
        </div>
      </div>
      <div className='side-fixed'>
        <div
          className='side-fixed-container bg-primary-70 p-2'
          data-url='https://jevelin.shufflehound.com/hello/'
        >
          <Networks vertical='true' />
        </div>
      </div>
    </div>
  );
}
