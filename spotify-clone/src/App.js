import "./App.scss";
import Nav from './components/Nav';
import Main from './components/Main';
import Player from './components/Player';

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav/>
        <Main/>
      </div>
      <div className="musicControls">
      <Player/>
      </div>
    </div>
  );
}

export default App;
