import styles from './register.module.css' //CSS
import { Link, useNavigate } from 'react-router-dom' // Links para navegar
import Logo from '../../assets/logoBlack.png' // Logo
import { useState } from 'react' // Hooks React
import { createUserWithEmailAndPassword } from 'firebase/auth' // Firebase
import { auth } from '../../firebase.js'

function Register() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const register = async e => {
		e.preventDefault()
		if (password !== confirmPassword)
			return console.warn('Wrong password match')
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			navigate('/')
		} catch (error) {
			alert(error.code)
		}
	}

	return (
		<div className={styles.register}>
			<Link to='/'>
				<img src={Logo} alt='Login logo' className={styles.register__logo} />
			</Link>
			<div className={styles.register__container}>
				<h1>Register</h1>
				<form>
					<h5>Name</h5>
					<input
						type='text'
						value={name}
						onChange={e => {
							setName(e.target.value)
						}}
					/>
					<h5>E-mail</h5>
					<input
						type='email'
						value={email}
						onChange={e => {
							setEmail(e.target.value)
						}}
					/>
					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={e => {
							setPassword(e.target.value)
						}}
					/>
					<h5>Confirm Password</h5>
					<input
						type='password'
						value={confirmPassword}
						onChange={e => {
							setConfirmPassword(e.target.value)
						}}
					/>

					<button
						onClick={register}
						type='submit'
						className={styles.register__registerButton}
					>
						Register
					</button>
				</form>
				<p>
					By continuing, you agree to Amazon's Terms of Use and Privacy Notice.
				</p>
				<Link to='/login' className={styles.register__loginButton}>
					I have an account
				</Link>
			</div>
		</div>
	)
}

export default Register
