import Home from './pages/Home/Home' // Componente
import Login from './pages/Login/Login' // Componente
import Register from './pages/Register/Register' // Componente
import Checkout from './pages/Checkout/Checkout' // Componente
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Rutas
import { useUserContext } from './context/User/UserState' // Contexto
import { auth } from './firebase.js' // Firebase
import { useEffect } from 'react' // React hooks
import ProtectedRoute from './components/ProtectedRoute' // componente que protege rutas

function App() {
	const dispatch = useUserContext()[1]

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				// the user is logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				})
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				})
			}
		})
		return () => {
			unsuscribe()
		}
	}, [])

	return (
		<Router>
			<Routes>
				{/* Rutas PROTEGIDAS */}
				<Route element={<ProtectedRoute />}>
					<Route path='/checkout' element={<Checkout />} />
				</Route>
				{/* Rutas NO protegidas */}
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
