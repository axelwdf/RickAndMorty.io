import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import React from 'react';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';
import SearchBox from './components/SearchBox';



const App = () => {

    const [locate, setLocate] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${getLocation}`)
            .then(res => setLocate(res.data))
    }, []);


    

    return(
        <div className='App' >
            <div className='header' >
            
            </div>

        <LocationInfo 
            locate={locate}
        />

        <SearchBox 
            type={setLocate}
        />

        <ResidentList
            lists={locate?.residents}
        />
        </div>
    );
}
const getLocation = Math.floor(Math.random() * 126) + 2;

export default App;