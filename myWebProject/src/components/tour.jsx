import { tourData } from "./data";
import "../styles/tour.css";
import PropTypes from 'prop-types';
Tour.propTypes = {
    id: PropTypes.string.isRequired,
  };
function Tour({ id }, { description = false }) {
    const tour = tourData[id];
    if (!tour) {
      return <p>Tour does not exist</p>;
  }
      return (
        <div className={id}>
            <div className="card" onClick={() => (window.location.href = tour.link)}>
                 <div className="card-content">
                     <h3>{tour.name}</h3>
                    <img src={tour.img} alt={tour.name}/>
                          { description && (
                         <div className= "info">
                          <p>{tour?.desc}</p>
                          <b>{tour?.price}</b>
                         </div>
                        )}
                </div>
             </div>
        </div>  
      ); 
  }
  export default Tour