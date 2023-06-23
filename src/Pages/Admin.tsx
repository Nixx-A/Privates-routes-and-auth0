import { useRef } from 'react'

// it was the first video that appeared on my feed
export default function Admin ({ addTodo }): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (inputRef.current instanceof HTMLInputElement) {
      if (inputRef.current.value === '') return
      const task = inputRef.current.value
      console.log(task)

      addTodo(task)
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  return (
    <>
      <section className="flex flex-col items-center overflow-hidden">
        <h1 className="text-center text-2xl">Admin</h1>
        <div className="flex justify-center items-center mt-7">
          <form onSubmit={handleSubmit}>
            <input className="px-2 py-1 rounded-md text-black mr-2" ref={inputRef} name="task" type="text" placeholder="Buy cheese..." />
            <button className='text-white bg-purple-600 rounded-md p-2 w-20 hover:bg-purple-500 duration-200'>Create</button>
          </form >
        </div>
      </section >

      {/* <iframe className="mt-5" width="600" height="400" src="https://www.youtube.com/embed/tTrrU3yzBHE" title="La Guardia Costera de EE. UU. confirma la muerte de los cinco tripulantes del submarino perdido" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}

    </>
  )
}

export function Todo ({ task }: { task: string }): JSX.Element {
  console.log(task)

  console.log(task)

  return (
    <div className='flex gap-1'>
      <input className="relative top-0.5" type="checkbox" name="complete" />
      <li>{task}</li>
    </div>
  )
}
