import React from "react";

const LocationInf = ({ name, type, dimension, population }) => {
console.log(population?.length)
    return (
        <div className='locationInf'>
            <h1>{name}</h1>
            <span>{`Type:${type}`}</span>
            <span>{`Dimension:${dimension}`}</span>
            <span>{`Population:${population?.length}`}</span>
        </div>
    )
}
export default LocationInf;