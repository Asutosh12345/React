import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "todo msg",
            completed: false
        }
    ],

    addTodo: (todo)=> {},
    updatedTodo: (id, todo)=>{},
    deleteTodo: (id)=> {},
    toggleTodo: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext) 
}

export const TodoProvider = TodoContext.Provider