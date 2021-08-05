import React from 'react'
import Categories  from './Categories'
import Header from './Header'

const Main=()=>{
    return (
        <div className="main">
          <div className="upperNav">
              <Header/>
          </div>
          <div className="mainContent">
                <div className="cardsWrap">
                <h1>Made for you</h1>
                <p className="subText">Get better recommendations the more you listen.</p>
                    <div className="cardsWrapInner" >
                        <div className="card" onClick={alert("clicked")} >
                            <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Pic 1"/>
                            </div>
                            <div className="cardContent">
                
                                <h3>Release Radar</h3>
                                <span>Podcasts we think you’ll get hooked on.</span>
                            </div>
                            <span className="playIcon">
                            <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                            </span>
                        </div>
                        <div className="card">
                            <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1553406624-52e5fb326413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Pic 1"/>
                            </div>
                            <div className="cardContent">
                
                                <h3>Release Radar</h3>
                                <span>Podcasts we think you’ll get hooked on.</span>
                            </div>
                            <span className="playIcon">
                            <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                            </span>
                        </div>
                        <div className="card">
                            <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Pic 1"/>
                            </div>
                            <div className="cardContent">
                
                                <h3>Release Radar</h3>
                                <span>Podcasts we think you’ll get hooked on.</span>
                            </div>
                            <span className="playIcon">
                            <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                            </span>
                        </div>
                    </div>
                </div>
               <Categories/>
               
                
                

          </div>

        </div>
    )
}
// document.querySelector('.card').addEvevntListener('click',()=>{
//     alert("cliked");
// });

export default Main