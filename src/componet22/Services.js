import React from 'react';
import './Services.css';

const Services = () => {
    return (
      <>
       <div className='row'>
        <div className='col pp'>
            Our Services : -
        </div>
       </div>
       <div className='row tt'>
        <div className='col'>
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://animalscience.unl.edu/Home/Alumni/AlumniReunion/AdobeStock_99189260-crop.jpg" className="card-img-top" alt="..." style={{height:"150px"}}/>
            <div className="card-body">
                <p className="card-text">Room Booking services.</p>
                <div className='btn btn-primary' style={{height:'40px',fontSize:"20px"}}>book now</div>
            </div>
        </div>
        </div>
        <div className='col'>
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://cdn3.vectorstock.com/i/1000x1000/01/17/special-offer-sticker-on-package-silhouette-vector-13550117.jpg" className="card-img-top" alt="..." style={{height:"150px"}}/>
            <div className="card-body">
                <p className="card-text">Special & pakeages.</p>
                <div className='btn btn-primary' style={{height:'40px',fontSize:"20px"}}>find now</div>
            </div>
        </div>
        </div>
        <div className='col'>
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://newcanadiandrain.com/wp-content/uploads/2011/11/Contact-Us.jpg" className="card-img-top" alt="..." style={{height:"150px"}}/>
            <div className="card-body">
                <p className="card-text">Contact us. </p>
                <div className='btn btn-primary' style={{height:'40px',fontSize:"20px"}}>call now</div>
            </div>
        </div>
        </div>
       </div>
      </>
    );
};

export default Services;
