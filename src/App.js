import { useEffect, useState } from 'react'
import './App.css'

import AddToDo from './components/AddTodo/AddToDo'
import ToDos from './components/Todos/ToDos'
function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const localData = JSON.parse(localStorage.getItem('todos'))
		setTodos(localData || [])
	}, [])

	const AddToDohandler = (inputText) => {
		setTodos((prevState) => {
			return [
				...prevState,
				{
					text: inputText,
					date: new Date().toLocaleDateString(),
					completed: false,
					id: Math.random().toString(),
				},
			]
		})
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	let noFoundGoal = <p className='no-found'>No Goals found. Maybe add one?</p>

	if (todos.length > 0) {
		noFoundGoal = <ToDos todos={todos} setTodos={setTodos} />
	}

	return (
		<div className='App'>
			<AddToDo onAddTodo={AddToDohandler} />
			{noFoundGoal}
		</div>
	)
}

export default App
