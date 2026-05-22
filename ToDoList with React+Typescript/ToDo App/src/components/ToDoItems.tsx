import React from "react"
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

type TodoItemsProps = {
  todoItems : {id: string, text: string}[]
  onDelete: (todoId: string) => void
}

const ToDoItems: React.FC<TodoItemsProps> = (props) => {

  return (
    <div className="my-5">
        {
          props.todoItems.map((elm)=>{
            return <Card key={elm.id} className="w-150">
              <CardHeader className="flex gap-5 justify-between items-center">
                <CardTitle>{elm.text}</CardTitle>
                <Button variant={"destructive"} size={"icon"} className={"border"} onClick={() => props.onDelete(elm.id)}><Delete/></Button>
              </CardHeader>
            </Card>
          })
        }
    </div>
  )
}

export default ToDoItems
