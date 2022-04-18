import '../styles/Cities.css';

const Cities = ({cities}) => {

  return (
    <div className="all-cities">
      <h3>Venue Locations in {cities.cityName}</h3>
      <div className="cities">
        {
          cities.venuDescription.map((desc)=>(
            <div className="cities-card">
              <img src={desc.image} alt={desc.location}/>
              <div className="cities-description">
                <h5>Address: {desc.location}</h5>
                <h5>Capacity: {desc.capacity}</h5>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cities;
