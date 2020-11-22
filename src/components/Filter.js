import React  from 'react'
import ReactStars from "react-rating-stars-component";
import './style.css'


const Filter = ( { searchbytitle, searchbyrate }) => {
    const ratingstarts = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 0,
        color: "black",
        activeColor: "yellow",
        onChange: (newvalue)=>{searchbyrate(newvalue)}
      };

    return (
            <form className="search">
                <div className="searchingalign">
                <label className="titlelabel"> Filter by Title </label>
                <input className="searchingform" type="text" placeholder="search here..."  onChange={(e) => searchbytitle(e.target.value)} />
                </div>
                <div className="ratingalign">
                < label className="ratelabel"> Filter by Rate </label>
                <span className="stars"> 
                <ReactStars {...ratingstarts} />
                </span>
                </div>
            </form> 
    )
}

export default Filter
