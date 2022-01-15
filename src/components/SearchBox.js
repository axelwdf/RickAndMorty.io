<<<<<<< HEAD
import './search.css'
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SearchBox = ({type}) => {
    const [ id, setId ] = useState('');
    const search = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then( res => { type(res.data)})
        setId('')
    }

    return(
        <div className="searchBox">
            <input type="text" onChange={ e =>  setId(e.target.value)} value={id} placeholder="type a number 1/126"/>
            <button onClick={search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </button>
=======
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
>>>>>>> 80dc882841efe21781768dbee15ccf10ddac3e2c
        </div>
    )
}
export default SearchBox;