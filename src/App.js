import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import FormWithArray from './Dashboard/FormArray';
import { useEffect, useState } from 'react';

function App() {
  let [formArrayList, setFormArrayList] = useState(JSON.parse(localStorage.getItem('formArrayList')) || []);
  let [newListItem, setNewListItem] = useState('');
  let handNewListItem = () => {
    if (newListItem.trim() !== '') {
      setFormArrayList([...formArrayList, newListItem]);
      setNewListItem('');
    }
  }
  let handleInput = () => {
    setInputHidden(!inputHidden);
  }
  const [inputHidden, setInputHidden] = useState(true);

  useEffect(() => {
    localStorage.setItem('formArrayList', JSON.stringify(formArrayList));
  }, [formArrayList]);

  let deleteList = (index) => {
    const removedList = formArrayList.filter((_, i) => i !== index);
    setFormArrayList(removedList);
  }
  return (
    <>
      <Navigation />

      <div className='list-container'>
        <div className='list-actions'>
          <form>
            <input type="text" name="taskName" value={newListItem} onChange={(e) => setNewListItem(e.target.value)} hidden={inputHidden} />
            <button onClick={handNewListItem} hidden={inputHidden}>Add</button>
          </form>
        </div>
        <button onClick={handleInput} className="add-task">Add Task</button>
        <ul className='formArrayList'>
          {
            formArrayList.map((title, index) => {
              return (
                <li key={index} className='formArrayListItem'>
                  <FormWithArray title={title} index={index} />
                  {/* <p key={index}>{title}</p> */}
                  <button onClick={() => deleteList(index)}>Delete List</button>
                </li>)
              // 
            })
          }
        </ul>
      </div>

    </>
  );
}

export default App;
