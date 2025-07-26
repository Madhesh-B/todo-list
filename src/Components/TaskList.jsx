import "./Styles/TaskList.css";
function TaskList(props) {
    return (
        <div className="container">
            <div className="list-view">
                <ul className="list-container">
                    {props.children}
                </ul>
            </div>
        </div>
    );
}

export default TaskList;
