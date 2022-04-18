import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import {FaBars} from 'react-icons/fa';
import {useState} from 'react';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const click = () => {
    setMobile(!mobile);
  };

  const close = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <h2>Alonso's Catering Services</h2>
        <div className="right">
          <Link to="/food">Food Selections</Link>
          <Link to="/venues">Venues</Link>
          <Link to="/catering">Catering Services</Link>
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mobile-container">
          <div className="mobile-btn">
            <FaBars style={{marginBottom: `1rem`, fontSize: `1.50rem`}} onClick={click}/>
            <h2>Alonso's Catering Services</h2>
          </div>
          <div className={mobile ? "mobile-clicked" : "mobile-links"} id={mobile ? "" : "hide"}>
            <Link to="/" style={{marginBottom: `2rem`, fontSize: `1.10rem`}} onClick={close}>Home</Link>
            <Link to="/about" style={{marginBottom: `2rem`, fontSize: `1.10rem`}} onClick={close}>About Us</Link>
            <Link to="/contact" style={{marginBottom: `2rem`, fontSize: `1.10rem`}} onClick={close}>Contact Us</Link>
            <Link to="/food" style={{marginBottom: `2rem`, fontSize: `1.10rem`}} onClick={close}>Food Selections</Link>
            <Link to="/venues" style={{marginBottom: `2rem`, fontSize: `1.10rem`}} onClick={close}>Venues</Link>
            <Link to="/catering" style={{marginBottom: `2rem`, fontSize: `1.10rem`}} onClick={close}>Catering Services</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
