import React, {useState} from 'react';


//useState can only be used on a function based component
// if using class base components, use State
const App = () => {

  // const [value, setValue] = useState(initialState);

  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <input type="text" onChange={() => null} value={''} />
    </div>
  );
};

export default App;
