import React, { useState, useEffect } from 'react';
import Toggle from './Toggle.js';


//useState can only be used on a function based component
// if using class base components, use State
const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');

  useEffect(()=> {
    document.title = name;  //<-document.title targets the tab
  })

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
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

//custom hooooook
function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);
    useEffect(() => {
      document.title = value;
    });
    return [value, setValue];
}



export default App;
