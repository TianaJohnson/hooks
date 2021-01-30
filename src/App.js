import React, {
  useEffect,
  useRef,
  createContext,
} from "react"
import Toggle from "./Toggle.js"
import Counter from "./Counter"
import { useTitleInput } from "./hooks/useTitleInput"
import { useSpring, animated } from "react-spring";
import useAbortableFetch from 'use-abortable-fetch';

export const userContext = createContext()
//useState can only be used on a function based component
// if using class base components, use State
const App = () => {
  
  const [name, setName] = useTitleInput("")
  const ref = useRef()
  // const [dishes, setDishes] = useState([])

  const props = useSpring({opacity : 1 , from: { opacity : 0 } });

  const { data, loading } = useAbortableFetch
  (`https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes`);
  console.log('data', data);


// the [] act as a componenet did mount and will not update 
  // useEffect( () => {
  //  fetchDishes();
  // }, [name]);

  // const reverseWord = (word) => {
  //   console.log("function called")
  //   return word.split("").reverse().join("")
  // }

  const title = "Level up Dishes"

  // caches. The [] checks to see if the item has changed.
  // if it has not, it will not update.
  // const TitleReversed = useMemo(() => reverseWord(name), [name])

  // useEffect(()=> {
  //   document.title = name;  //<-document.title targets the tab
  // })

  return (
      <div className="main-wrapper" ref={ref}>
        <animated.h1
        style={props}
        onClick={() => ref.current.classList.add("new-fake-class")}>
          Level Up Dishes
        </animated.h1>
        <Toggle />
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button> Submit</button>
        </form>
        <Counter />
        {data && data.map((dish) => (
          <article className=" dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
        
      </div>
  )
}

export default App
