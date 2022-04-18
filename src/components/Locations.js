import Cities from './Cities';
import '../styles/Locations.css';
import {useState} from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';

const Locations = ({locations}) => {
  const [limit, setLimit] = useState(4);
  const more = () => {
    setLimit(limit + 4);
  };

  const less = () => {
    setLimit(limit - 4);
  };

  return (
    <>
      <div className="all-locations">
        <h1>{locations.island}</h1>
        <div className="locations">
          {locations.city.slice(0, limit).map((cities)=>(<Cities cities={cities}/>))}
        </div>
      </div>
      <div className={locations.city.length <= 3 ? "hide" : "arrow-container"}>
        <div className={limit >= locations.city.length ? "less-cities" : "more-cities"}>
          <div className={limit >= locations.city.length ? "lessLeft-cities" : "left-cities"}></div>
          <div className={limit >= locations.city.length ? "lessArrow-cities" : "arrow-cities"} onClick={limit >= locations.city.length ? less : more}>
            {limit >= locations.city.length ? <p>Less</p> : <p>More</p>}
            {limit >= locations.city.length ? <p><AiOutlineArrowUp/></p> : <p><AiOutlineArrowDown/></p>}
          </div>
          <div className={limit >= locations.city.length ? "lessRight-cities" : "right-cities"}></div>
        </div>
      </div>
    </>
  )
}

export default Locations;
