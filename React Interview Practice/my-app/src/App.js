import React, { useEffect, useState } from 'react'

// const App = () => {
//   const getTodoFromLocalStorage = () => {
//     if (localStorage.getItem('todo')) {
//       console.log(localStorage.getItem('todo'))
//       return JSON.parse(localStorage.getItem('todo'));
//     }
//   }
//   if(!localStorage.getItem('todo'))
//   {
//     localStorage.setItem('todo', JSON.stringify([]))
//   }
//   const [todo, setTodo] = useState(getTodoFromLocalStorage());
//   const [input, setInput] = useState("");
//   const handleOnChange=(e)=>{
//     setInput(e.target.value)
//   }
  
//   const handleAdd = () => {
//     // add into todos
//     setTodo((prevTodos)=>{
//       const todos=[...prevTodos,input];
//       localStorage.setItem('todo',JSON.stringify(todos))
//       return todos;
//     });
//     localStorage.setItem('todo',JSON.stringify(todo));
//     setInput("")
//   }
//   useEffect(()=>{
//     localStorage.getItem('todo')
//   },[]);
//   const handleAtoZ=()=>{
//     setTodo(todo.toSorted())
//   }
//   const handleZtoA=()=>{
//     setTodo(todo.toSorted().reverse())
//   }
//   return (
//     <div>
//       <input type="text" onChange={handleOnChange} value={input} />
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleAtoZ}>A to Z</button>
//       <button onClick={handleZtoA}>Z to A</button>
//       <ul>
//         {todo.map((currTodo)=>{
//           return <li>{currTodo}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App


const App = () => {
  const getTodoFromLocalStorage=()=>{
    
    if(localStorage.getItem('todo'))
    {
      console.log(localStorage.getItem('todo'))
      return JSON.parse(localStorage.getItem('todo'));
    }
  }

  if (!localStorage.getItem('todo')) {
    localStorage.setItem('todo', JSON.stringify([]))
  }

  const [todo,setTodo]=useState(getTodoFromLocalStorage());
  const [input,setInput]=useState("");
  
  const handleOnChange=(e)=>{
    setInput(e.target.value)
  }

  // useEffect(() => {
  //   localStorage.getItem('todo')
  // }, [])
  

  const handleAdd=()=>{
    setTodo((prevTodos)=>{
      const todos=[...prevTodos,input]
      localStorage.setItem('todo',JSON.stringify(todos))
      return todos;
    })
    setInput("")
  }
  const handleAtoZ=()=>{
    setTodo(todo.toSorted())

  }
  const handleZtoA=()=>{
    setTodo(todo.toSorted().reverse())

  }
  return (
    <div>
      <input type="text" onChange={handleOnChange} value={input}/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleAtoZ}>A to Z</button>
      <button onClick={handleZtoA}>Z to A</button>
      <ul>
        {todo.map((currTodo)=>{
          return <li>{currTodo}</li>
        })}
      </ul>
    </div>
  )
}

export default App

