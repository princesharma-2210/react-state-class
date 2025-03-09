import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoList = () => {
    let [todos,setTodos]= useState([{task:"Sample Task", id:uuidv4(), isDone:false}]);
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
    let updateUpperCase=()=>{
        setTodos((prevtodos)=>
            prevtodos.map((todo)=>{
                return{
                ...todo,task:todo.task.toUpperCase(),
    };
})
);
    };

    let updateElementOne=(id)=>{
        setTodos((prevtodos)=>
            prevtodos.map((todo)=>{
                if(todo.id==id){
                return{
                ...todo,task:todo.task.toUpperCase(),
    };
}else{
    return todo;
}
})
);
    };
    let updateMarkAsDone=(id)=>{
        setTodos((prevtodo)=>
            prevtodo.map((todo)=>{
                if(todo.id==id){
                    return{
                ...todo, 
                isDone:true,
                };
            }
                else{
                    return todo;
                }
            })
        );
    };
    let updateMarkAsDoneAll=()=>{
        setTodos((prevtodo)=>
            prevtodo.map((todo)=>{
                    return{
                ...todo, 
                isDone:true,
                };
            })
        );
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
            <li key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '5px 0' }}>
            <span
              style={
                todo.isDone
                  ? { textDecorationLine: 'line-through', color: 'red', flex: 1 }
                  : { flex: 1 }
              }
            >
              {todo.task}
            </span>
          
            {/* Delete button */}
            <button
              onClick={() => deleteElement(todo.id)}
              style={{
                marginLeft: '10px', // Adjust spacing between buttons
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          
            {/* UPPERCASE button */}
            <button
              onClick={() => updateElementOne(todo.id)}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              UPPERCASE
            </button>
          
            {/* MARKASDONE button */}
            <button
              onClick={() => updateMarkAsDone(todo.id)}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              MARK AS DONE
            </button>
          </li>
          
        ))
    }
        </ul>
        <br></br><br></br>
        <button onClick={updateUpperCase}>TOUPPERCASE</button>
        &nbsp; &nbsp;
        <button onClick={updateMarkAsDoneAll}>TOMARKASDONEALL</button>
    </div>
  );
}

export default TodoList
