import { useState } from "react";
import './styleToDo.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { text: newTask, completed: false }]); // Store completed state
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function toggleTaskCompletion(index) {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed }; // Toggle completed state
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list-container"> {/* New container for the whole To-Do List */}
            <div className="to-do-list">
                <h1>To-Do List</h1>
    
                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Enter a task..." 
                        value={newTask} 
                        onChange={handleInputChange} 
                    />
                    <button className="add-button" onClick={addTask}>
                        Add
                    </button>
                </div>
    
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index} className={task.completed ? "completed" : ""}>
                            <span className="text">{task.text}</span>
                            <button className="complete-button" onClick={() => toggleTaskCompletion(index)}>
                                ✅
                            </button>
                            <button className="delete-button" onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );    
}

export default ToDoList;
