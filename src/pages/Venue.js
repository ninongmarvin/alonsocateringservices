import '../styles/Venue.css';
import {VenueLocations} from '../helpers/VenueLocations';
import Locations from '../components/Locations';
import banner from '../assets/venue.jpg';

const Venue = () => {
  return (
    <>
      <div className="venue" style={{backgroundImage: `url(${banner})`}}>
        <div className="venue-container">
          <h1>We have the best selection of Venues just for you!</h1>
          <p>All you have to do now is find one near you.</p>
        </div>
      </div>
      <div className="available-locations">
        {VenueLocations.map((locations, key)=>{
          return (
            <Locations locations={locations}/>
          );
        })}
      </div>
    </>
  )
}

export default Venue;
