import styles from '../styles/subtotal.module.css' // CSS
import { getBasketTotal } from '../context/Basket/BasketReducer' // Funcion calcular total a pagar
import { useBasketContext } from '../context/Basket/BasketState' // Contexto

function Subtotal() {
	const basket = useBasketContext()[0]

	return (
		<div className={styles.subtotal}>
			{/* Price */}
			<p>
				Subtotal ({basket.length} items):{' '}
				<strong>${getBasketTotal(basket)}</strong>
			</p>
			<small className={styles.subtotal__gift}>
				<input type='checkbox' id='checkbox_id' />
				<label htmlFor='checkbox_id'>This order contains a gift</label>
			</small>

			<button>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal
