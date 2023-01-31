import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeAll } from '../../action';

const TodoList = () => {
    const [todoList, setTodoList] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state)=> state.addTodoList.list)
   
    return (
        <div className='container-fluid'>
            <h1 className='text-center'>Todolist</h1>
            <div>
                <input value={todoList} onChange={(e)=>setTodoList(e.target.value)} type="text"/>
                <button onClick={()=>dispatch(addTodo(todoList), setTodoList(''))}>Add</button>
            </div>
            <div>
                {
                    list.map(eli =><div>
                        <li>{eli.data}</li>
                        <button onClick={()=>dispatch(deleteTodo(eli.id))}>delete</button>
                    </div>)
                }
            </div>
            <button onClick={()=>dispatch(removeAll())}>Remove All</button>
        </div>
    );
};

export default TodoList;