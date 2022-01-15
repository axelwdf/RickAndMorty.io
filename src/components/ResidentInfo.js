import './resident.css'
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import ResidentList from "./ResidentList";

const ResidentInfo = ({list}) => {
    
    const [resInfo, setResinfo] = useState({});
    useEffect(() => {
        axios.get(list)
            .then(res => setResinfo(res.data))
    }, [list]);
    
    
    return(
        <div className='Resident-Info' >
            <div className='image-container' >
                    <img  className='img' src={resInfo.image} />
                </div>
                <div className='dates-container' >
                    <p>
                        <span >
                            <b>
                                Name: 
                            </b>
                            <p className='dates' >
                                {resInfo.name}
                            </p>
                        </span>
                    </p>

                    <p>
                        <span>
                            <b>
                                Status: 
                            </b>
                            <p className='dates'>
                                {resInfo.status}
                            </p>
                        </span>
                    </p>

                    <p>
                        <span>
                            <b>
                                Origin: 
                            </b>
                            <p className='dates'>
                                {resInfo.origin?.name}
                            </p>
                        </span>
                    </p>

                    <p>
                        <span>
                            <b>
                                Episode: 
                            </b>
                            <p className='dates'>
                                {resInfo.episode?.length}
                            </p>
                        </span>
                    </p>
                </div>
        </div>
    );
}

export default ResidentInfo;