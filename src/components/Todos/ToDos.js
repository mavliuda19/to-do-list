import Button from '../UI/Button'
import Card from '../UI/Card'
import './ToDos.css'

const ToDos = (props) => {
	const deleteToDoHandler = (e) => {
		props.setTodos(props.todos.filter((el) => el.id !== e.target.id))
	}

	const completeHandler = (e) => {
		props.setTodos(props.todos.map((item) => {
			if (item.id === e.target.id) {
				item.completed = !item.completed
			}
			return item
		}))
		
	}

	return (
		<>
			<ul>
				{props.todos.map((todo) => {
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
								className={`${
									todo.completed ? 'completed' : 'items'
								}`}
								id={todo.id}
							>
								{todo.text}
								
							</li>
							<span className= 'date'>{todo.date}</span>
							<Button className='btn' id={todo.id} onClick={deleteToDoHandler}>
								delete
							</Button>
						</Card>
					)
				})}
			</ul>
		</>
	)
}
export default ToDos
