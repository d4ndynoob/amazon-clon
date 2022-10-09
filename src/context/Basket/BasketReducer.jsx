import Types from './types.js'

// Funcion que calcula total a pagar
export const getBasketTotal = basket => {
	return (basket?.reduce((amount, item) => (item.producto.price * item.cantidad) + amount, 0)).toFixed(2)
}

export default (state, action) => {
	// const {item, type} = action
	let newBasket
	
	switch (action.type) {

		// AGREGAR UN PRODUCTO AL CARRITO
		case Types.ADD_TO_BASKET:
			for(let x = 0; x < state.length; x++){
				if(state[x].producto.id === action.item.id){
					state[x] = {
						...state[x],
						cantidad: state[x].cantidad + 1
					};
					return [...state]
				}
			}
			return [...state, { producto: action.item, cantidad: 1 }]; // remplazo el objeto llamado basket

		// ELIMINAR UN PRODUCTO POR COMPLETO DEL CARRITO
		case Types.REMOVE_FROM_BASKET:
			newBasket = [...state]

			const index = newBasket.findIndex(
				basketItem => basketItem.producto.id === action.id
			)

			// verifico si encontro el id
			// >= 0; si existe en la lista
			if (index >= 0) {
				newBasket.splice(index, 1)
			} else {
				console.warn(`Cant remove product (id: ${action.id})`)
			}
			return newBasket;

		// LIMPIAR EL CARRITO
		case Types.REMOVE_ALL_FROM_BASKET:
			return [];

		// CAMBIAR LA CANTIDAD DE UN PRODUCTO DEL CARRITO
		case Types.CHANGE_CANTIDAD_BASKET:
			for(let x = 0; x < state.length; x++){
				if(state[x].producto.id === action.action.id){
					state[x] = {
						...state[x],
						cantidad: action.action.value
					};
					break;
				}
			}
			return [...state]

		// DEFAULT
		default:
			return state
	}
}
