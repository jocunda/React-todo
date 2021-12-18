import "../App.css";
import { ChangeEvent, FormEvent, useState } from 'react';
import {
    MdPlaylistAdd,
} from 'react-icons/all';

interface TodoFormProps {
    addTodo: AddTodo;
}


export default function CardForm({ addTodo }: TodoFormProps) {

    const [newTodo, setNewTodo] = useState<string>("")


    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setNewTodo(e.target.value);
        console.log(newTodo)
    }

    function handleSubmit(e: FormEvent<Element>) {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo("")
    }

    return <>
        <form className="input-add">
            <input type="text"
                name="todoadd"
                id="inputtodo"
                placeholder="Add..."
                value={newTodo}
                onChange={handleChange}
            />
            <MdPlaylistAdd onClick={handleSubmit} />
        </form>

    </>
}