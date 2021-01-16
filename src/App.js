import React, {useState} from 'react';
import Toggle from './Toggle.js';


//useState can only be used on a function based component
// if using class base components, use State
const App = () => {

  // const [value, setValue] = useState(initialState);

  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle/>
      <h1>{name}</h1>
     
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
  
    </div>
  );
};

export default App;
