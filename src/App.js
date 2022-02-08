import './App.css'
import AddToDo from './components/AddTodo/AddToDo'
import ToDos from './components/Todos/ToDos'

function App() {
	return (
		<div className='App'>
			<AddToDo />
			<ToDos />
		</div>
	)
}

export default App
