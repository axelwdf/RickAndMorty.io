import './list.css'
import React from "react";
import ResidentInfo  from "./ResidentInfo";

const ResidentList = ({lists}) => {
    
    return(
        <div className='Resident-List'>
            { lists?.map(list => <ResidentInfo list={list} key={list} /> ) }
        </div>
    );
}

export default ResidentList;