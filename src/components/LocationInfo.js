import React from "react";
import './Location.css';

const LocationInfo = ({locate}) =>{
    return(
        <div className='Location-Info' >
            <h2 className='title-info' > {locate.name} </h2>
            <div className='info-container' >
                <p>
                    <span> 
                        <b>
                            Type:
                        </b> 
                    </span> {locate.type}
                </p>
                <p>
                    <span> 
                        <b>
                            Dimension: 
                        </b>
                    </span> {locate?.dimension}
                </p>
                <p>
                    <span>
                        <b>
                            Population:
                        </b>
                    </span> {locate.residents?.length}
                </p>
            </div>
        </div>
    );
}

export default LocationInfo;

