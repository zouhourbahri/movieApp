import React from "react";
import { Carousel } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./style.css";

const Filter = ({ searchbytitle, searchbyrate }) => {
  const ratingstarts = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 0,
    color: "black",
    activeColor: "yellow",
    onChange: (newvalue) => {
      searchbyrate(newvalue);
    },
  };

  return (
    <div>
    <div
      style={{ backgroundColor: "rgb(49, 8, 8)", fontSize: 16, padding: 40 }}
    >
      <form className="search">
        <div className="searchingalign">
          <label className="titlelabel"> Filter by Title </label>
          <input
            className="searchingform"
            type="text"
            placeholder="search here..."
            onChange={(e) => searchbytitle(e.target.value)}
          />
        </div>
        <div className="ratingalign">
          <label className="ratelabel"> Filter by Rate </label>
          <span className="stars">
            <ReactStars {...ratingstarts} />
          </span>
        </div>
      </form>
      </div>
      {/* <Carousel className="carouselsize">
        <Carousel.Item className="slide">
          <img
            className="d-block w-100 carousel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOosEB1NB4s2KlJdLi1AitqYq6FjCf57dKkA&usqp=CAU"
            alt=" "
          />
           <img
            className=" carousel"
            src="https://i2.wp.com/fiz-x.com/wp-content/uploads/2012/03/movie-poster-happy-feet-two.jpg"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://ae01.alicdn.com/kf/HTB1nJheJpXXXXavXXXXq6xXFXXXM/Man-som-hatar-kvinnor-Movie-Poster-HD-Print-Size-50x70-cm-Wall-Sticker-home-decortion.jpg_Q90.jpg_.webp"
            alt=" "
          />
           <img
            className=" carousel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2RIHJlcnyfse4KpEiZ7rWLHiUX7za6EYgQ&usqp=CAU"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYYiMD_b15oPCoW8dfHppsOskivi11zC2zA&usqp=CAU"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://i.pinimg.com/564x/c5/7a/58/c57a589aba5e51605f980c7754e46943.jpg"
            alt=" "
          /><img
          className=" carousel"
          src="https://cdn.onebauer.media/one/empire-images/features/59e8d795405a5c6805947751/31%20The%20Exorcist.jpg?quality=50&width=1000&ratio=1-1&resizeStyle=aspectfit&format=jpg"
          alt=" "
        /><img
        className=" carousel"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSx73T0F1LIJpGaY_RCmPABJS-5fsq04qog&usqp=CAU"
        alt=" "
      /> 
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img
            className="d-block w-100 carousel"
            src="https://images-na.ssl-images-amazon.com/images/I/51vMT6lNMqL._AC_.jpg"
            alt=" "
          />
         <img
            className=" carousel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtXq9TSZm1Z0oqI3hMbYNIJ_8v18yjwEozA&usqp=CAU"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCh9L16SRjHJq9mkaVj7Bmv1RI-vot1TyAxQ&usqp=CAU"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxSTtQxrZCcq-xauMyTNM5kNgL505YDLJmw&usqp=CAU"
            alt=" "
          /> 
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img
            className="d-block w-100 carousel"
            src="https://i.pinimg.com/originals/35/a1/91/35a1919c63410dce2f658dbb9f130df8.jpg"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://lh3.googleusercontent.com/proxy/Pgm9TEM2mD2qLAxS11PYxv8N1gNGK9KESOrsa3qCMc6ZaiKG4OsSIAQJKUgHdfaNfCKCL9ZBjLdfhIgn0wgbcaiMW9GWhjoORdv6urdgg1sBSDY8UR4FEQ"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://wallpaperaccess.com/full/2527248.jpg"
            alt=" "
          />
          <img
            className=" carousel"
            src="https://lh3.googleusercontent.com/proxy/bVGLxYIKhebFOYNPmmYoKPFd3OSFOzx-LKWQ9VbEB78nOXqgGov7SZSgWb0hIXWnKfssE6SHas9xMnyXUc4g2Wjd6yHo5BlN82k"
            alt=" "
          /> 
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default Filter;
