import React from 'react'

const TodoList = ({todos,setTodos,setEditTodo}) => {

    const handleDelete=({id}) => {
        setTodos(todos.filter((todo)=> todo.id !==id));
        }

        const handleComplete=(todo) =>{
            setTodos(
                todos.map((item)=> {
                    if(item.id===todo.id){
                        return{...item,completed :!item.completed}
                    }
                    return item;
                })
            )
        }


        const hadleEdit=({id}) =>{
            const findTodo =todos.find((todo) => todo.id ===id);
            setEditTodo(findTodo);

        }
  return (
    <div>

        <div id="tasks">TASKS </div>
             {todos.map((todo)=> (

                <li className="list-items" key={todo.id}>

                   <input
                         type="text" 
                         value={todo.title} 
                         className={`list ${todo.completed ? "complete" : ""}`}
                         onChange={(event)=>event.preventDefault()}></input > 
                         
                         
                <div>

                    <button className='button-complete'
                      onClick={()=> handleComplete(todo)}>completed
                       
                    </button>

                    <button className='button-edit'
                    onClick={() => hadleEdit(todo)}
                    >
                        Edit
                    </button>

                    <button className='button-delete'
                     onClick={()=>handleDelete(todo)}>
                       Delete
                    </button>
                    <br></br>
                    <p >{todo.showTime} {todo.Datee}</p>
                    </div>

               


    </li>
        
        ))}
        
    </div>
  );
};

export default TodoList