import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

type onAddtodoProps = {
  onAddtodoFn: (text: string) => void
}

const AddTodo : React.FC<onAddtodoProps>= (props) => {
  const [text, setText] = useState<string>("");

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
    setText(e.target.value);
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault(); 
    props.onAddtodoFn(text);
    setText("");
  }

  return (
      <form action="" className='flex items-center gap-5' onSubmit={onSubmitHandler}>
        <Input type='text' className='w-fit' onChange={onChangeHandler} value={text}/>
        <Button type='submit'>Add</Button>
      </form>
  )
}

export default AddTodo
