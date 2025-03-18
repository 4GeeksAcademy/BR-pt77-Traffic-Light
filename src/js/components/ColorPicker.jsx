import React, {useState} from "react";


const ColorPicker = () => {
    const [selected, setSelected] = useState("red")
    

    return (
        <div className="lights mt-5 mx-auto">
           <div onClick={() => {setSelected("red")}} className={selected=="red" ? "lightGlow red" : "red" }>
           </div>
           <div onClick={() => {setSelected("yellow")}} className={selected=="yellow" ? "lightGlow yellow" : "yellow" }>
           </div>
           <div onClick={() => {setSelected("green")}} className={selected=="green" ? "lightGlow green" : "green" }>
           </div>
        </div>


    )
}

export default ColorPicker;