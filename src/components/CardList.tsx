import "./Component.css"
import {
    MdOutlineDeleteOutline,
} from 'react-icons/all';


interface TodoListProps {
    todos: Array<Todo>
    toogleComplete: ToogleComplete
    delTodo: delTodo
}


export default function CardList({ todos, toogleComplete, delTodo }: TodoListProps) {


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
                <MdOutlineDeleteOutline id="icon-right" className="float" onClick={() => delTodo(todo)} />
            </div>
        ))}

    </>
};