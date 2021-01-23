import React, { useState, useEffect, useRef, createContext, useMemo} from 'react';
import Toggle from './Toggle.js';
import Counter from './Counter';
import { useTitleInput } from './hooks/useTitleInput';

export const userContext = createContext();
//useState can only be used on a function based component
// if using class base components, use State
const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called')
    return word.split("").reverse().join("");
  }

    const title = 'Level up Dishes';
 
// caches. The [] checks to see if the item has changed.
// if it has not, it will not update.
  const TitleReversed = useMemo(() => reverseWord(name), [name]) 
  

  // useEffect(()=> {
  //   document.title = name;  //<-document.title targets the tab
  // })

  //night break

  return (
    <userContext.Provider
        value={{
          user:false
        }}>
    <div className="main-wrapper" ref = {ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>{TitleReversed}</h1>
      {TitleReversed}
      <Toggle/>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
     
      <input type="text"
             onChange={(e) => setName(e.target.value)} 
             value={name} />
          <button> Submit</button>
      </form>
      <Counter/>

    </div>
    </userContext.Provider>
  );
};





export default App;
