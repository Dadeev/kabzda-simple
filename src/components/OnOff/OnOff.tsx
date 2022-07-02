import React from 'react';
import Green from "./Green";
import Red from "./Red";

type OnOffType = {
    value: boolean
}
export const OnOff = (props: OnOffType) => {
    return (props.value) ? <Green/> : <Red/>
}

// export const OnOff = (props: OnOffType) => {
//     if (props.value) {
//         return (
//             <div>
//                 <button style={{color: "green"}}>on</button>
//                 <button>off</button>
//                 <button style={{color: "green"}}>circle</button>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <button>on</button>
//                 <button style={{color: 'red'}}>off</button>
//                 <button style={{color: "red"}}>circle</button>
//             </div>
//         )
//     }
// }