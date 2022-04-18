import banner from '../assets/banner.jpg';
import '../styles/Home.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const [hover, setHover] = useState(false);
  const mouseHover = () =>{
    setHover(true);
  };
  const mouseNotHover = () =>{
    setHover(false);
  };

  return (
    <div className="home" style={{backgroundImage: `url(${banner})`}}>
      <div className="divide">
        <div className="left-divide">
          <h1>A catering service that will surely meet your needs!</h1>
        </div>
        <div className="right-divide" onMouseEnter={mouseHover} onMouseLeave={mouseNotHover} >
          <h1>Wanna know why?</h1>
          <div className={hover ? "show" : "hide"}>
            <p>'Cause our range of food selection is so immense you wouldn't believe it!
              <Link to="/food" className="btn">Click Here!</Link>
            </p>
            <p>We have the best Venues available all throughout the Philippines! We are sure there is one near You!
              <Link to="/venues" className="btn">Click Here!</Link>
            </p>
            <p>We can cater everything from Birthday Parties to Christening and all the way to Weddings!
              <Link to="/catering" className="btn">Click Here!</Link>
            </p>
          </div>
          {
            window.innerWidth < 501 || window.innerWidth <= 1200 ?
            <div className="mobile-why">
              <p>'Cause our range of food selection is so immense you wouldn't believe it!</p>
              <Link to="/food" className="btn">Click Here!</Link>
              <p>We have the best Venues available all throughout the Philippines! We are sure there is one near You!</p>
              <Link to="/venues" className="btn">Click Here!</Link>
              <p>We can cater everything from Birthday Parties to Christening and all the way to Weddings!</p>
              <Link to="/catering" className="btn">Click Here!</Link>
            </div>
            :
            <div></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
