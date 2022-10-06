import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctor Appointment',
        day:'Oct 6th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Set ATM Pin',
        day:'Oct 7th at 3:00pm',
        reminder:true,
    },
    {
        id:3,
        text:'Take Umbrella',
        day:'Oct 10th at 10:00am',
        reminder: false,
    },
])

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !==id))
    console.log("Deleted","task no.", id);
  }
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length>0 ?<Tasks tasks={tasks} delete={deleteTask}/> : "Click on Add to add a new task"}
    </div>
  );
}

export default App;
