import React, {  useState } from 'react'
import './App.css'
import Overview from './components/Overview'; 

const App = ()=>{
  const [task , setTask] =  useState('')
  const [tasks , setTasks] = useState([])
  const handleSubmit = (e) => {e.preventDefault()
  if (task==='')return
  setTasks([...tasks, task])
  setTask('')
  }
  return (
    <div className="container">
      <h1>TASK APP</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Enter..." className="form-control" onChange = {e =>{setTask(e.target.value)}} value={task} />
          <button className="btn btn-primary btn-block ">Enter</button>
        </div>
      </form>
      <Overview tasks={tasks}/>
    </div>
  );
}

export default App;
