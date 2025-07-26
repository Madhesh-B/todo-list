import './Styles/userInput.css';
import { useState , useRef} from 'react';
import TaskList from './TaskList';
import List from './List';
function userInput() {
    const [words , changeWord] = useState('');
    const [list , listAlter] = useState([]);
    const [classNameList , classChange] = useState("btn");
    const crossBtn  = useRef(null);

    //This is to clear all the values.
    const clearAll = () => {
        listAlter([]);
    }

    //This is to add the manage the state in the input box.
    const addText = (e) => {
        changeWord(e.target.value);
    }
    //This is to add a list item.
    const AddNext = (e) => {
        console.log(list);
        if (words.trim() !== "") {
            const newTask = {
                text: words,
                completed: false,
                classNameList:"btn completed-switch",
                hide:"btn display-none"
            };
            listAlter([...list, newTask]);
            changeWord('');
        }
    }
    //This is used to remove the element in the array.
    const removeListItem = (element) => {
        const filtered = list.filter(item => item.text !== textToRemove);
        listAlter(filtered);
    }
    //Removes item in the ui
    const removeItem = (e) => {
        e.target.parentNode.parentNode.parentNode.parentNode.classList.add("remove-class")
        
        var elementToRemove = e.target.parentNode.parentNode.previousSibling.textContent;
        console.log(typeof elementToRemove);
        
        setTimeout(() => {
            e.target.parentNode.parentNode.parentNode.parentNode.remove();
            console.log(list);
        } , 200)
    }
    //This is to return the tick icon.
    const tickIcon = () => {
        return <span className="material-symbols-outlined">check</span>;
    }
    //This tag will be appeared ins
    const changeText = () => {
        return <span className='completed-switch'>Completed</span>
    }
    //This is to change the state using above 2 functions.
    const toggleCompleted = (index) => {
        // classChange("btn completed-switch")
        const updatedList = [...list];
        updatedList[index].completed = true;
        listAlter(updatedList); 
    };

    return (
        <>
            <div className="input-conatiner-box">
                <div className='user-input'>
                    <div className="input-container">
                        <input type="text" onInput={addText} value={words} className="input-box" placeholder='Add your Task' style={{background:"white"}}/>
                        <button onClick={AddNext}>+ Add</button>
                    </div>
                    <div className="clear-btn-container">
                        <button className="btn clear-btn" onClick={clearAll}>Clear All</button>
                    </div>
                </div>
                <TaskList>
                    {
                        list.map((task , index) => <List key = {index} listValue = {task.text}>
                            <div className="btn-holder">
                                <button ref={crossBtn} className={task.completed ? task.hide : "btn"} onClick={removeItem}>
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                                <button className={task.completed ? task.classNameList : "btn"} onClick={() => {toggleCompleted(index)}}>
                                    {task.completed ? changeText() : tickIcon()}
                                </button>
                            </div>
                        </List>)
                    }
                </TaskList>
            </div>
        </>
    );
}

export default userInput;