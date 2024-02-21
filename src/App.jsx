import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
 const Counting =()=>{
 setCount(count+1);


 }

  return (
    <>
      <div className="but">
       
       <div >   
         <button onClick={Counting}>
         Abdelrahman Nijim : {count}
         </button>

       </div>
     
      
     </div>
   
    </>
  )
}

export default App
