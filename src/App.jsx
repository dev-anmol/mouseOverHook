import { useEffect, useState } from "react";
import "./App.css";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  function handleMouseMove(e){
    setMousePosition({x: e.clientX, y: e.clientY})
  }


  useEffect(()=>{
    window.addEventListener('mousemove', handleMouseMove)

    return ()=>{
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })


  return mousePosition


}

function App() {

  const mousePointer = useMousePosition();

  return <>
    <h1>your mouse position {mousePointer.x} and {mousePointer.y}</h1>
  </>

}

export default App;
