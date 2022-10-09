import { useReducer, useContext, createContext } from 'react' //Hooks React
import BasketReducer from './BasketReducer' // Logica - Funciones

// Creamos el contexto
const BasketContext = createContext()

// Exportamos el uso del contexto
export const useBasketContext = () => {
	return useContext(BasketContext)
}

function BasketState(props) {
	const initialBasket = []
	const [basket, dispatch] = useReducer(BasketReducer, initialBasket)

	return (
		<BasketContext.Provider value={[basket, dispatch]}>
			{props.children}
		</BasketContext.Provider>
	)
}
export default BasketState
