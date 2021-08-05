
import shufle from './next.png';
import prev from './previous.png';
import play from './play-button.png';
import next from './next.png';
import repeat from './repeat-button.png';
import Music from '../Music';
import link from "../music/m1.mp3"
import AudioPlayer from './MusicControls/AudioPlayer';
import tracks from "./MusicControls/tracks"


const Player=({spotify})=>{


    return (
        <div className="footer">
            <div className="footer_left">
            <img className="footer_albumLogo" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
            <div className="footer__songInfo">
                <h4>Yeah!</h4>
                <p>User</p>
                {/* <audio ref="audio_tag" src={link} controls autoPlay/> */}
            </div>
            </div>
            <div className="footer_center">
                <AudioPlayer tracks={tracks}/>
            </div>
            <div className="footer_right">
            <p>music valg</p>
            </div>
        </div>
    )
}

export default Player