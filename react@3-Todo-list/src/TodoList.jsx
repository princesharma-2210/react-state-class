import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoList = () => {
    let [todos,setTodos]= useState([{task:"Sample Task", id:uuidv4()}]);
    let [newTodo,setNewTodo]= useState("");

    let addNewElement=()=>{
        console.log("addding of task");
        setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };
    let deleteElement=(id)=>{
        console.log("delete tasks");
        setTodos((prevTodo)=>todos.filter((prevTodo)=>prevTodo.id!== id));

    };
  return (
    <div>
        <input placeholder='Add tasks' value={newTodo} onChange={updateTodoValue} ></input>
        <button onClick={addNewElement}>ADD</button>
        <br></br><br></br>
        <hr></hr><br></br>
        <h4>Tasks Todo</h4>
        <br></br>
        <ul>
        {
        todos.map((todo)=>(
            <li key={todo.id}>
                <span>{todo.task}</span>
                &nbsp; &nbsp; &nbsp;
                <button onClick={()=>{deleteElement(todo.id)}}>Delete</button>
            </li>
        ))
    }
        </ul>
    </div>
  );
}

export default TodoList
