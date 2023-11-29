import {useState} from 'react';
import PitcherList from '../PitcherList/PitcherList';
import CatcherList from '../CatcherList/CatcherList';
import TotalPitcher from '../TotalPitcher/TotalPitcher';
import TotalCatcher from '../TotalCatcher/TotalCatcher';

function App() {
  

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <div>Total Pitchers: {pitcherList.length}</div>
      <div>Total Catchers: {catcherList.length}</div>
      
      <PitcherList />
      <CatcherList />
     
    </div>
  );
}

export default App;
