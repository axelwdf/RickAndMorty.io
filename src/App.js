import './App.css';
<<<<<<< HEAD
import axios from 'axios';
import {useEffect, useState} from 'react';
import React from 'react';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';
import SearchBox from './components/SearchBox';


=======
import SearchBox from "./components/SearchBox";
import LocationInf from "./components/LocationInf";
// import ResidentList from "./components/ResidentList";
>>>>>>> 80dc882841efe21781768dbee15ccf10ddac3e2c

const randomId = Math.floor(Math.random()*126)+1;
const App = () => {
<<<<<<< HEAD

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
=======
console.log('app')
  const [type, setType] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setType(res.data))
      .catch(error => console.log(error));
  }, []);
  console.log(type)//este consolo solo para estar viendo que data nos llega
  return(
    <div className='App' >
    <img  className='bannerImg' src="https://www.blindbox.cz/data/banners/rick_morty_banner.jpg" alt="rickandmorty" />
    <div className="container">
      <img className='portalImg' src="https://media3.giphy.com/media/i2tLw5ZyikSFdkeGHT/source.gif" alt="portal" />
      <SearchBox seTType={setType}/>
      <LocationInf
        name={type.name}
        type={type.type}
        dimension={type.dimension}
        population={type?.residents}
      />
      {/* <ResidentList residents={type.residents}/> */}
    </div>
    </div>
  );
}
export default App;

// algunos gif de prueba para el baner/encabezado
    {/* https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0230acb3-c9bd-4966-8200-86acf27ebca1/dcr8hfu-3a0066f1-8a1a-46ce-bcba-bb1e4fdd3c21.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyMzBhY2IzLWM5YmQtNDk2Ni04MjAwLTg2YWNmMjdlYmNhMVwvZGNyOGhmdS0zYTAwNjZmMS04YTFhLTQ2Y2UtYmNiYS1iYjFlNGZkZDNjMjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P_TPqrykdgmwT4qDv2CPX41qZdTgesquK6pmoDV1T0M */}
    {/* <img src="https://pousta.com/wp-content/uploads/2020/07/rickandmorty.gif" alt="rickAndMortyGIF" /> */}
>>>>>>> 80dc882841efe21781768dbee15ccf10ddac3e2c

