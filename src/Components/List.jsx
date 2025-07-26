import { useState } from 'react';
const List = (props) => {
    const [classNames , changeClassNames] = useState("list-container-bar");
    return (
    <li className="list-item">
        <div className={classNames}>
            <span>{props.listValue}</span>
            {props.children}
        </div>
    </li>
    );
}

export default List