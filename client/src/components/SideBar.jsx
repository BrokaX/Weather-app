import React from 'react';

import NavBar from '../NavBar/NavBar';
import DataBox from './DataBox/DataBox';
export default function SideBar() {
 
  return (
    <div className='app-wrapper'>
      <section className='app-container'>
       <NavBar/>
        <div className='main-weather-section-left bg'>
         <DataBox/>
        </div>

        <div className='main-weather-section-right'>
          <div className='top'></div>
        </div>
      </section>
    </div>
  );
}
