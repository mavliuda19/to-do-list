import './AddToDo.css'
import { useReducer } from 'react'
import ErrorModal from '../UI/Modal'
import Button from '../UI/Button'

const inputReducer = (state, action) => {
	if (action.type === 'TODO_INPUT') {
		return {
			value: action.val,
			isValid: action.val.trim().length > 0,
			confirm: null,
		}
	}
	if (action.type === 'CONFIRM') {
		return {
			value: state.value,
			isValid: false,
			confirm: { title: 'Error!', message: 'Type something!' },
		}
	}
	if (action.type === 'OK') {
		return {
			value: state.value,
			isValid: false,
			confirm: null,
		}
	}
	return {
		value: '',
		isValid: false,
		confirm: null,
	}
}

const AddToDo = (props) => {
	const [inputState, dispatchInput] = useReducer(inputReducer, {
		value: '',
		isValid: false,
		confirm: null,
	})
	const inputValueHandler = (event) => {
		dispatchInput({ type: 'TODO_INPUT', val: event.target.value })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (inputState.value.trim().length === 0) {
			dispatchInput({ type: 'CONFIRM' })
			return
		}
		props.onAddTodo(inputState.value)
		dispatchInput(inputState.isValid)
	}

	const errorHandler = () => {
		dispatchInput({ type: 'OK' })
	}

	return (
		<>
			{inputState.confirm && (
				<ErrorModal
					title={inputState.confirm.title}
					message={inputState.confirm.message}
					message={inputState.confirm.message}
					onConfirm={errorHandler}
				/>
			)}

			<div className='todos'>
				<input
					type='text'
					value={inputState.value}
					onChange={inputValueHandler}
				/>
				<Button type='submit' onClick={submitHandler}>
					Add
				</Button>
			</div>
		</>
	)
}
export default AddToDo
