type AddTodo = (newTodo: string) => void;

type Todo = {
    text: string;
    check: boolean;
}

type ToogleComplete = (selectedTodo: Todo) => void;

type delTodo = (selectedTodo: Todo) => void;