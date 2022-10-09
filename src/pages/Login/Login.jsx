import styles from './login.module.css' // CSS
import { Link, useNavigate } from 'react-router-dom' // Links navegacion
import Logo from '../../assets/logoBlack.png' // Logo
import { useState } from 'react' // Hooks React
import { signInWithEmailAndPassword } from 'firebase/auth' // Firebase
import { auth } from '../../firebase.js'

function Login() {
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login = async e => {
		e.preventDefault()
		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate('/')
		} catch (error) {
			alert(error.code)
		}
	}

	return (
		<div className={styles.login}>
			<Link to='/'>
				<img src={Logo} alt='Login logo' className={styles.login__logo} />
			</Link>
			<div className={styles.login__container}>
				<h1>Sign in</h1>
				<form>
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
					<button
						onClick={login}
						type='submit'
						className={styles.login__signInButton}
					>
						Sign in
					</button>
				</form>
				<p>
					By continuing, you agree to Amazon's Terms of Use and Privacy Notice.
				</p>
				<Link className={styles.login__registerLink} to='/register'>
					Create your Amazon Account
				</Link>
			</div>
		</div>
	)
}

export default Login
