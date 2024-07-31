import React, {useState} from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["kkoko"])

    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask() {

        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask])
            setNewTask("")
        }

    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function moveTaskUp(index){
        if (index === 0) return; // Can't move up the first item
        setTasks(l => {
            const newList = [...l];
            [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
            return newList;
        });
    }
    function moveTaskDown(index) {
        if (index === tasks.length - 1) return; // Can't move down the last item
        setTasks(l => {
            const newList = [...l];
            [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
            return newList;
        });
    }

    return(<div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className='add-button'
                onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button
                    className='delete-button'
                    onClick={() => deleteTask(index)}>
                        Delete
                </button>
                <button
                    className='move-button'
                    onClick={() => moveTaskUp(index)}>
                    UP
                </button>
                <button
                    className='move-button'
                    onClick={() => moveTaskDown(index)}>
                    DOWN
                </button>
            </li>)}
        </ol>
    </div>
    )
}

export default ToDoList