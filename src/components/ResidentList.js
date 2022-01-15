<<<<<<< HEAD
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
=======
import React from 'react';
// import ResidentInfo from './ResidentInfo';
// este componente va a hacer un map sobre todos los residentes que es un array que 
// recibe por props y renderizara otro componente llamado ResidenInf
const ResidentList = ({residents}) => {
    return (
        <div className='residentsInf'>
            {/* <ResidentInfo/> */}
        </div>
    );
};
>>>>>>> 80dc882841efe21781768dbee15ccf10ddac3e2c

export default ResidentList;