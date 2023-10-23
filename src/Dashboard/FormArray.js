import './FormArray.css';
import { useState, useEffect } from 'react';

const FormWithArray = ({ title, index }) => {
    const [inputHidden, setInputHidden] = useState(true);

    let [items, setItems] = useState(JSON.parse(localStorage.getItem(index.toString())) || []);

    useEffect(() => {
        localStorage.setItem(index.toString(), JSON.stringify(items));
    }, [items]);

    let [newItem, setNewItem] = useState('');

    // let title = "To Do List";

    let handleInput = () => {
        setInputHidden(!inputHidden);
    }

    let handleNewItem = (e) => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    }

    const deleteItem = (index) => {
        const updatedList = items.filter((_, i) => i !== index);
        setItems(updatedList);
    };

    return (
        <div className="task-list">
            <p className="title">{title} - </p>
            <ul>
                {items.map((item, index) => (
                    <li className="list-item" key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>Delete Task</button>
                    </li>
                ))}
            </ul>

            <form>
                <input type="text" name="taskName" value={newItem} onChange={(e) => setNewItem(e.target.value)} hidden={inputHidden} />
                <button onClick={handleNewItem} hidden={inputHidden}>Add</button>
            </form>
            <button onClick={handleInput} className="add-task">Add Task</button>
        </div>
    )
}

export default FormWithArray;