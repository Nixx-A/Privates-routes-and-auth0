/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
import { Todo } from './Admin'

export default function Home ({ todos }): JSX.Element {
  console.log(todos)

  if (!todos.length) return <p className='text-center mt-10 text-2xl'>There are not todos</p>

  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-2xl">Home</h1>
      <ul className="mx-2 bg-purple-900 w-5/6 m-auto h-auto mt-6 p-1 overflow-hidden">

        {
          todos.map((todo) => {
            return (
              <Todo key={todo.id} task={todo.task} />
            )
          })
        }
      </ul>
    </div>
  )
}
