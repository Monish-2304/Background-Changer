import { useState } from 'react'
import './index.css'
function App() {
const [color,setColor]=useState("green")
  return (
  <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>
  <div className="flex flex-wrap justify-center align-middle pt-28 rounded-lg inset-x-0">
<div className="flex flex-wrap gap-3 px-4 py-2 justify-center bg-white px-3 py-2 rounded-3xl">
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"yellow"}} onClick={()=> setColor("yellow")}>Yellow</button>
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>Blue</button>
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>Orange</button>
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>Olive</button>
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"purple"}} onClick={()=> setColor("purple")}>Purple</button>
<button className="outline-none px-4 text-white shadow-lg py-1 rounded-full" style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>Black</button>
</div>
  </div>
  </div>
  )
}

export default App
