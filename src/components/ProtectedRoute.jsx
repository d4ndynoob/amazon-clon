import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from '../context/User/UserState'

function ProtectedRoute() {
	const user = useUserContext()[0]

	return user !== null ? <Outlet /> : <Navigate to='/login' />
}

// Navigate devuelve una etiqueta para insertar en codigo jsx
// useNavigate devuelve una funcion para ejecutar en codigo js

export default ProtectedRoute
