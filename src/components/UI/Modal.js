import styles from './Modal.module.css'
import Card from './Card'
import ReactDOM from 'react-dom'
import Button from './Button'

const BackDrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm} />
}

const ModalOverly = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				{props.children}
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	)
}

const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root'),
			)}
			{ReactDOM.createPortal(
				<ModalOverly 
				 title={props.title} 
				 message={props.message}
				 children={props.children}
				 onConfirm={props.onConfirm} />,
				 document.getElementById('modal-root'),
			)}
		</>
	)
}
export default ErrorModal