import { useState } from 'react';

const Bulb = ()=>{
  const [light,setLight] = useState("OFF");
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{background:"orange"}}>ON</h1>
      ) : (
        <h1 style={{background:"gray"}}>OFF</h1>
      )}
      <button onClick={()=>{
        setLight(light === "ON" ? "OFF" : "ON")
      }}>전구 {light === "ON" ? "OFF" : "ON"}</button>
    </div>
  )
}

export default Bulb;