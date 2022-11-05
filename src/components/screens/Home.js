import React  from "react";

const home=()=>{
    return (
        <div className="home">

        <div className="card home-card"> 
        <h5> Hrithik Roshan</h5>
        {/* 2 div (1. image & 2.caption) */}
            <div className="card-image"> 
            <img 
                src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
            />
           </div>
           <div className="card-content">
           <i className="material-icons" style={{color:"red"}}>favorite</i>
           <h6>title</h6>
           <p>This is caption</p>
           <input  type="text" placeholder="add a comment" />
          </div>

        </div>
        <div className="card home-card"> 
        <h5> Hrithik Roshan</h5>
        {/* 2 div (1. image & 2.caption) */}
            <div className="card-image"> 
            <img 
                src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
            />
           </div>
           <div className="card-content">
           <i className="material-icons" style={{color:"red"}}>favorite</i>
           <h6>title</h6>
           <p>This is caption</p>
           <input  type="text" placeholder="add a comment" />
          </div>

        </div>
        <div className="card home-card"> 
     
        <h5> Hrithik Roshan</h5>
        {/* 2 div (1. image & 2.caption) */}
            <div className="card-image"> 
            <img 
                src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
            />
           </div>
           <div className="card-content">
           <i className="material-icons" style={{color:"red"}}>favorite</i>
           <h6>title</h6>
           <p>This is caption</p>
           <input  type="text" placeholder="add a comment" />
          </div>

        </div>

        </div>
    )
}

export default home;