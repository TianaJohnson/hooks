import React, { useState } from "react";

const Toggle = () => {
    return (
        <div>
           <button>Toggle</button>
           <h2>Hello!</h2>
         </div>
    )
}

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