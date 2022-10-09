import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'

//Contextos
import BasketState from './context/Basket/BasketState'
import UserState from './context/User/UserState'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<UserState>
		<BasketState>
			<App />
		</BasketState>
	</UserState>
	// </React.StrictMode>
)
