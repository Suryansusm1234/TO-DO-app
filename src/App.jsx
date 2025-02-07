import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import {v4 as uuid} from "uuid"
uuid();
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos"); //It adds the saved todos from the local storage 
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [showCompleted, setShowCompleted] = useState(false);
  const undoneTasks = todos.filter(item => !item.iscomplete);//It filters the tasks that are not completed
  const doneTasks = todos.filter(item => item.iscomplete);//It filters the tasks that are completed

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted); //It toggles the showCompleted state  
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
	const HandleEdit = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.getAttribute('name');
    let t = todos.find(items=>items.id === id)
    settodo(t.todo) 
    let newtodos = todos.filter(items=>items.id !== id)
    settodos(newtodos)
  };
	const HandleDelete = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.getAttribute('name');
    let newtodos = todos.filter(items=>items.id !== id)
    settodos(newtodos)
   
  };
	const HandleAdd = () => {
    if (todo.trim() !== '') {  // Only add if todo is not empty
      settodos([...todos, {id: uuid(), todo: todo.trim(), iscomplete: false}])
      settodo("")
    }else{
      alert("Enter a valid task")
    }
  };
	const Handlechange = (e) => {
    settodo(e.target.value)
  };
	const Handlecheckbox = (e) => {
    let id = e.target.name 
    let newtodos = todos.map(items=>{
      if(items.id === id){
        return {...items, iscomplete:!items.iscomplete}
      }
      return items
    })
    settodos(newtodos)
  };
  
	return (
		<>
			<Navbar />
			<div className="ui ">
				<div className="content-wrapper">
					<h1 className="text-3xl mb-4 ">Add Task</h1>
					<input
						type="text"
						className="p-2 rounded text-black w-64"
						placeholder="Enter Your task" onChange={Handlechange }value = {todo}
          
					/>
					<button onClick={HandleAdd}>Add</button>
				</div>
				<div className="data ">
        <div className="datashow">
            <input 
              type="checkbox" 
              checked={showCompleted}
              onChange={toggleShowCompleted}
            />
            <span>Show all Done Tasks!!!</span>
          </div>
          
					<h1 className="text-3xl font-bold text-center  underline"> Your Tasks </h1>
          {undoneTasks.length === 0 && <h2>No pending tasks</h2>}
          {undoneTasks.map(items => {
            return <div className="task" key={items.id}>
              <input name ={items.id} onClick={Handlecheckbox} type="checkbox" />
              <span className={items.iscomplete?"line-through decoration-black" :"" }>{items.todo}</span>
							<button name ={items.id} onClick={HandleEdit}><FaEdit /></button>
							<button name ={items.id} onClick={HandleDelete}><MdOutlineDelete /></button>
            </div>
            
          })}
          {showCompleted && (
            <div className="completed-tasks mt-8">
              <h2 className="text-2xl font-bold mb-4 underline">Completed Tasks</h2>
              {doneTasks.length === 0 && <p>No completed tasks</p>}
              {doneTasks.map(items => (
                <div className="task completed" key={items.id}>
                  <span className="line-through">{items.todo}</span>
                  <button name={items.id} onClick={HandleDelete}><MdOutlineDelete /></button>
                </div>
              ))}
            </div>
          )}
					
				</div>
			</div>
      <h3 className="text-center text-2xl text-white">***Made by suryansu***</h3>
		</>
	);
}

export default App;
