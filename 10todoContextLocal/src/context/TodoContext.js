import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Learn React",
            completed: false
        },
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleTodo: (id) => {},

})


export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}