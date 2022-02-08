import { useContext } from 'react'
import ToDoContext from '../../store/todo-context'
import Button from '../UI/Button'
import Card from '../UI/Card'
import './ToDos.css'

const ToDos = () => {
	const contextToDo = useContext(ToDoContext)
	const deleteToDoHandler = (e) => {
		contextToDo.setTodos(
			contextToDo.todos.filter((el) => el.id !== e.target.id),
		)
	}

	const completeHandler = (e) => {
		contextToDo.setTodos(
			contextToDo.todos.map((item) => {
				if (item.id === e.target.id) {
					item.completed = !item.completed
				}
				return item
			}),
		)
	}

	let noFoundGoal = <p className='no-found'>No Goals found. Maybe add one?</p>

	if (contextToDo.todos.length > 0) {
		noFoundGoal = contextToDo.todos.map((todo) => {
			return (
				<Card className='todo-item' key={todo.id}>
					<input
						id={todo.id}
						type='checkbox'
						onChange={completeHandler}
						checked={todo.completed}
						className='checked-inp'
					/>
					<li
						className={`${todo.completed ? 'completed' : 'items'}`}
						id={todo.id}
					>
						{todo.text}
					</li>
					<span className='date'>{todo.date}</span>
					<Button
						className='btn'
						id={todo.id}
						onClick={deleteToDoHandler}
					>
						delete
					</Button>
				</Card>
			)
		})
	}

	return (
		<>
			<ul>{noFoundGoal}</ul>
		</>
	)
}
export default ToDos
