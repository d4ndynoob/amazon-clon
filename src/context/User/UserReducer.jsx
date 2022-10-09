import Types from './types.js'

export default (state, action) => {
	// const {item, type} = action
	switch (action.type) {
		// ASIGNAR UN USUARIO A NUESTRO CONTEXTO
		case Types.SET_USER:
			return action.user

		// DEFAULT
		default:
			return state
	}
}
