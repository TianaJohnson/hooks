import React, { useState, useContext } from "react";
import DishForm from "./DishForm";
import { userContext } from './App';

const Toggle = () => {

    const [isToggled, setToggle] = useState(false);
    // const userInfo = useContext(userContext);
    // if(!userInfo.user) return null;

    return (
        <div>
           <button onClick={() => setToggle(!isToggled)}>Toggle</button>
           {isToggled && <DishForm setToggle={setToggle}/>}
         </div>
    );
};

export default Toggle;


// export default class Refactor extends Component {
//     state = {
//       isToggled: false
//     };
  
//     toggle = () => {
//       this.setState(state => {
//         return { isToggled: !state.isToggled };
//       });
//     };
  
//     render() {
//       return (
//         <div>
//           <button onClick={this.toggle}>Toggle</button>
//           {this.state.isToggled && <h2>Hello!</h2>}
//         </div>
//       );
//     }
//   }