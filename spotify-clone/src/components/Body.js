import React from 'react'
import Header from './Header'
import SongRow from './SongRow'
import './Body.css'
import {useDataLayerValue} from '../DataLayer'

function Body({spotify}) {
const[{discover_weekly},dispatch]= useDataLayerValue();

    return (
        <div  className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="baner"/>
                <div className="body__infotext">
                   <strong>PLAYLIST</strong> 
                   <h2>Discover Weekly</h2>
                   <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icon">
                    {/* <Playcirculat/>
                    <FavoraitICon/>
                    <MoreHorizonIcon/> */}
                </div>
                {discover_weekly?.tracks.items.map(item  => (
                    <SongRow track={item.track}/>
                ))}

            </div>
        </div>
    )
}

export default Body;
