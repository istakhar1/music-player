import React from 'react';
import "./App.scss"
import Nav from './Nav';
// import Body from './Body';
import Main from './Main';
import Player from './Player';

const Home=({spotify})=>{
    return (
    
        <div className="outerWrap">
        <div className="App">
          <Nav/>
          <Main />
          {/* <Body spotify={spotify}/> */}
        </div>
        <div className="musicControls">
        <Player spotify={spotify}/>
        </div>
      </div>

    )
}

export default Home