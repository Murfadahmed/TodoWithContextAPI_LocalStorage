import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'item01Msg',
            completed: false,
        },
    ],
    addTodo: (Todo) => { },
    updateTodo: (id,Todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider