
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

const App = () => {

  const [type, setType] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(res => setType(res.data))
      .catch(error => console.log('ha ocurrido un error'));
  }, []);

  return(
    <div className='App' > 

    </div>
  );
}

export default App;