import { Button } from './ui/button'
import { Input } from './ui/input'

const AddTodo = () => {
  return (
      <form action="" className='flex items-center gap-5'>
        <Input type='text' className='w-fit'/>
        <Button>Add</Button>
      </form>
  )
}

export default AddTodo
