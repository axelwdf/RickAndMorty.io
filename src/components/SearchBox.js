import axios from "axios";
import React from "react";
import { useState } from "react";

const SearchBox = ({seTType}) => {
    const [ id, setId ] = useState('');
    const search = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then( res => { seTType(res.data)})
        setId('')
    }
    return(
        <div className="searchBox">
            <input type="text" onChange={ e =>  setId(e.target.value)} value={id} placeholder="type a number 1/126"/>
            <button onClick={search}><i class="fas fa-search"></i></button>
        </div>
    )
}
export default SearchBox;