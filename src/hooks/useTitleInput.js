import { useState, useEffect, useDebugValue } from 'react';

//custom hooooook
function useTitleInput(initialValue) {
    const [value, setValue] = useState(initialValue);
      useEffect(() => {
        document.title = value;
      });
      useDebugValue('hi');

      return [value, setValue];
  }


export  { useTitleInput };