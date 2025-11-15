import { useState } from 'react'
import ToDoList from './ToDoList.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
     <ToDoList />
     </div>


     );
}

export default App
