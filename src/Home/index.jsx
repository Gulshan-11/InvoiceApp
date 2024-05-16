import React, { useState } from "react";
import './index.css';
import { Button } from "react-bootstrap";

const Home = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([{
        "id": 1,
        "content": "This is the first todo element"
    }]);
    const [editId, setEditId] = useState(null);
    const [editContent, setEditContent]= useState("");

    const addTodo = () => {
        setList([...list, { id: list.length + 1, content: input }])
        setInput("");
    };

    const deleteTodo = (id) => {
        setList(list.filter((todo) => todo.id !== id))
    };

    const handleCheckboxChange = (id) => {
        const todoContent = document.getElementById(id);
        if (todoContent) {
            todoContent.style.textDecoration = todoContent.style.textDecoration === "line-through" ? "none" : "line-through";
        }
    };


    const handleEdit = (id) => {
        setEditId(id);
        const todoEL = document.getElementById(id);
        todoEL.disabled = !todoEL.disabled;
    };

    const saveEdit = (id) => {
        const updatedList = list.map(todo => {
            if (todo.id === id) {
                return { ...todo, content: editContent };
            }
            return todo;
        });
        setList(updatedList);
        const todoEL = document.getElementById(id);
        todoEL.disabled = !todoEL.disabled;
        setEditId(null);
    };

    return (
        <div className="my-container">
            <h1>Todo Application</h1>
            <div className="input-section">
                <input className='my-input' type="text" label="input" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button onClick={addTodo}>Add</Button>
            </div>
            <div className="todo-lists">
                {list.map((todo) => {
                    return (
                        <div key={todo.id} className="todo">
                        <input type="checkbox" id={"checkbox-"+todo.id} onChange={() => handleCheckboxChange(todo.id)} />
                          <input type="text" className="todo-content" id={todo.id} defaultValue={todo.content} onChange={(e) => setEditContent(e.target.value)} disabled={true}/>
                            {editId === todo.id ? (
                                <Button onClick={() => saveEdit(todo.id)}>Save</Button>
                            ) : (
                                <Button onClick={() => handleEdit(todo.id)}>Edit</Button>
                            )}
                            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
