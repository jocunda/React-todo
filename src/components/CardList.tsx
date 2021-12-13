import "./Component.css"
import {
    MdOutlineDeleteOutline,
} from 'react-icons/all';


interface TodoListProps {
    todos: Array<Todo>
    toogleComplete: ToogleComplete
}


export default function CardList({ todos, toogleComplete }: TodoListProps) {

    return <>
        {todos.map((todo) => (
            <div className="card">
                <input
                    type="checkbox"
                    className="checktoogle"
                    onChange={() => toogleComplete(todo)}
                    checked={todo.check}
                />
                <span id="center" className={todo.check ? "float overstrike" : "float "}>{todo.text}</span>
                <MdOutlineDeleteOutline id="icon-right" className="float" />
            </div>
        ))}

    </>
};