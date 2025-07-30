import { tourData } from "./data";
import "../styles/tour.css";
import PropTypes from 'prop-types';
Tour.propTypes = {
    id: PropTypes.string.isRequired,
  };
function Tour({ id }) {
    const tour = tourData[id];
    if (!tour) {
      return <p>Tour does not exist</p>;
  }
      return (
        <div className={id}>
            <div className="card" onClick={() => (window.location.href = tour.link)}>
                 <div>
                    <img src={tour.img} alt={tour.name}/>
                        <div className= "info">
                         <h3>{tour.name}</h3>
                         <p>{tour.desc}</p>
                         <b>{tour.price}</b>
                        </div>
                </div>
             </div>
        </div>  
      ); 
  }
  export default Tour