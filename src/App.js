import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle.js';
import { useTitleInput } from './hooks/useTitleInput';


//useState can only be used on a function based component
// if using class base components, use State
const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  

  // useEffect(()=> {
  //   document.title = name;  //<-document.title targets the tab
  // })

  return (
    <div className="main-wrapper" ref = {ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>Level Up Dishes</h1>
      <Toggle/>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
     
      <input type="text"
             onChange={(e) => setName(e.target.value)} 
             value={name} />
          <button> Submit</button>
      </form>

    </div>
  );
};





export default App;
