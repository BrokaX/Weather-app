import React from 'react';

import NavBar from '../NavBar/NavBar';
import DataBox from './DataBox/DataBox';
export default function SideBar() {
 
  return (
    <div className='app-wrapper'>
      <section className='app-container'>
       <NavBar/>
<DataBox/>
      </section>
    </div>
  );
}
