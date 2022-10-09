import { useReducer, useContext, createContext } from 'react' //Hooks React
import UserReducer from './UserReducer' // Logica - Funciones

// Creamos el contexto
const UserContext = createContext()

// Exportamos el uso del contexto
export const useUserContext = () => {
	return useContext(UserContext)
}

function UserState(props) {
	const initialUser = {};
	const [user, dispatch] = useReducer(UserReducer, initialUser)

	return (
		<UserContext.Provider value={[user, dispatch]}>
			{props.children}
		</UserContext.Provider>
	)
}
export default UserState
