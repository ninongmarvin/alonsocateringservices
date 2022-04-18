import catering from '../assets/catering.jpg';
import '../styles/Catering.css';
import { FaBeer } from 'react-icons/fa';
import Services from '../components/Services';
import {CateringServices} from '../helpers/CateringServices';

const Catering = () => {
  return (
    <>
      <div className="catering-banner" style={{backgroundImage: `url(${catering})`}}>
        <div className="catering-container">
          <h1>From Birthday Parties to Christening and even all the way to Weddings! We Got you!</h1>
          <p>Whatever you're celebrating, it will surely be in our list.</p>
        </div>
      </div>
      {
        CateringServices.map((services, key) => {
          return (
            <Services service={services}/>
          )
        })
      }
    </>
  )
}

export default Catering;
