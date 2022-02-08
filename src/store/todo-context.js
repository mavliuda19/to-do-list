import React, { useEffect, useState } from 'react'

const ToDoContext = React.createContext({
	onAddTodo: (inputText) => {},
	todos: '',
	setTodos: () => {},
})

export const ToDoContextProvider = (props) => {
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

	return (
		<ToDoContext.Provider
			value={{
				onAddTodo: AddToDohandler,
				todos: todos,
				setTodos: setTodos,
			}}
		>
			{props.children}
		</ToDoContext.Provider>
	)
}

export default ToDoContext
