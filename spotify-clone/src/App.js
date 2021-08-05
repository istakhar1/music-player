import React ,{ useEffect , useState } from "react";

import Login from "./components/Login";
import {getTokenFromUrl} from './components/spotify';

import Home from './components/Home';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./DataLayer";


const spotify =new SpotifyWebApi();

const App = () => {
  // const [token,setToken] = useState(null);

  const [{user,token},dispatch] = useDataLayerValue();

  //run code based on a given conditions
  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token=hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });

        spotify.getUserPlaylists().then
((playlists) =>{
  dispatch(
    {
      type:'SET_PLAYLISTS',
      playlists:playlists,
    }
  )
});       
      });

      spotify.getPlaylist('37i9dQZF1DWSwxyU5zGZYe').then(response => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      })
    }


  },[]);

  return (
     
   <div>
     {
       token ? (
        //  <AudioPlayer/>
         <Home spotify={spotify}  />
        // <AudioPlayer tracks={tracks} />
       ): (
         <Login/>
       )
     }

   </div>
  );
}

export default App;