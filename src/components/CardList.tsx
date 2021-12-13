import "./Component.css"
import {
    MdOutlineDeleteOutline,
    ImCheckboxUnchecked,
    ImCheckboxChecked
} from 'react-icons/all';


interface TodoListProps {
    todos: Array<Todo>
    toogleComplete: ToogleComplete
}


export default function CardList({ todos, toogleComplete }: TodoListProps) {

    return <>
        {todos.map((todo) => (
            <div className="card">
                <ImCheckboxUnchecked
                    id="icon-left"
                    className={todo.check ? "float" : "float hidden"}
                    onClick={() => toogleComplete(todo)} />
                <ImCheckboxChecked
                    id="icon-left2"
                    className={!todo.check ? "float" : "float hidden"}
                    onClick={() => toogleComplete(todo)} />
                <span id="center" className={!todo.check ? "float overstrike" : "float "}>{todo.text}</span>
                <MdOutlineDeleteOutline id="icon-right" className="float" />
            </div>
        ))}

    </>
};