import React from 'react';
import './style.css';
import SideBar from './sidebar';

export default function App() {
  return (
    <div id="App">
      <SideBar 
        pageWrapId={'page-wrap'} 
        outerContainerId={'App'} 
        width={'24em'}
        //menu={'left'}
        />
      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
}
