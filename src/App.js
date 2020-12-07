import React, {useState, useEffect, useReducer} from 'react';
import './App.css';

import {Routes , Route} from 'react-router-dom';
import { About, Contact, Error404, Events, Home } from './pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
 }


// function App({login}) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(()=> {
//     if(!login) return;
//     setLoading(true);
//     fetch(`https://api.github.com/users/${login}`)
//     .then((response) => response.json())
//     .then(setData)
//     .then(()=> setLoading(false))
//     .catch(setError);
//   },[login]);

//   if(loading) return <h1>LOADING...</h1>
//   if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
//   if(!data) return null;


//   if(data) {
//     return (
//       <div className="App">
//           <div>{data.name}</div>
//           <div><img src={data.avatar_url} width={150} alt=""/></div>
//           <div>{data.bio}</div>
//       </div>
//     );
//   }
  
//   return <div>No user Available</div>;
// }

export default App;
