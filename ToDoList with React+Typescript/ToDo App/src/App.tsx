import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import ToDoItems from './components/ToDoItems'
import type { singleTodoType } from './types/todo'

function App() {
  // const items = [{id: 1, text: "First todo item"}]

  const [todo, setTodo] = useState<singleTodoType[]>([])

  const onAddTodo = (text: string) : void =>{
    setTodo([...todo, {id:Math.random().toString(), text: text}])
  }

  const deleteToItems = (todoId: string) =>{
      const updatedTodos = todo.filter((elm)=>{
        return elm.id != todoId
      })
      setTodo(updatedTodos)
  }
  
  return (
    <>
    <main className='max-w-6xl mx-auto my-5'>
      <h1 className='font-bold'>Add Todo</h1>
      <AddTodo onAddtodoFn = {onAddTodo}/>
      <ToDoItems todoItems = {todo}  onDelete = {deleteToItems}/>
    </main>
    </>
  )
}

export default App
