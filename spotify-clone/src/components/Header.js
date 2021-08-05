import React, { useState } from 'react'
import { useDataLayerValue } from '../DataLayer';
import "./Header.css";
function Header({spotify}) {
    const [{user},dispatch]=useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
            {/* <SearchIcon> */}
                <input placeholder="Artist, Songs or podcasts" type="text"></input>
            </div>
            <div className="header__right">
            <img src={user?.images[0]?.url} alt=""></img>
            <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
