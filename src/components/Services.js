import '../styles/Services.css';

const Services = ({service}) => {
  return (
    <div className="catering">
      <div className="images" style={{backgroundImage: `url(${service.image})`}}>
        <div className="images-container">
          <h1>{service.type}</h1>
          <div className="services">
            {
              service.availableServices.map(
                (available) => (
                  <div className="service-cards">
                    <h1>{available.serviceType}</h1>
                    <p>Price: &#8369;{available.price}</p>
                    <p>Capacity: {available.guests}</p>
                    {available.setUp == true ? <p>Design&Setup Included</p> : <p>No Design&Setup</p>}
                    <p>Venue: {available.venue}</p>
                    {available.planner == true ? <p>Planner Included</p> : <p>No Planner</p>}
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
