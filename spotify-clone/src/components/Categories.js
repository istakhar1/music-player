import React from 'react';

const Categories = () => {
    const dataCategories = [
        {
            id:1,
            Name:'Show to try',
        },
        {
            id:1,
            Name:'Recommended radio',
        },
        {
            id:2,
            Name:'Recent played',
        },
        {
            id:3,
            Name:'Uniquely yours',
        },
        {
            id:4,
            Name:'Best of artists',
        },
    ]

    return (

        <div>
            {dataCategories.map(category => (
                <div className="cardsWrap">
                <h2>{category.Name}</h2>
                 <p className="subText">Podcasts we think you’ll get hooked on.</p>
                 {/* <span className="seeAll">SEE ALL</span> */}
                   <div class="cardsWrapInner">
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
                           <img src="https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="Pic 1"/>
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
                           <img src="https://images.unsplash.com/photo-1622804136680-46dc2a8f0598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Pic 1"/>
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

            ))}
    </div> 
    )
}

export default Categories