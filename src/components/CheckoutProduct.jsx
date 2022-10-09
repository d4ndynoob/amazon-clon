import styles from '../styles/checkoutProduct.module.css' // CSS
import { useBasketContext } from '../context/Basket/BasketState' // Contexto
import { useState } from 'react'

function CheckoutProduct({ id, title, image, price, rating, cantidad }) {
	const dispatch = useBasketContext()[1]

	const [addMoreItems, setAddMoreItems] = useState(false)
	const [inputError, setInputError] = useState(false)
	const [selectValue, setSelectValue] = useState(cantidad)
	const [input, setInput] = useState(cantidad)

	const removeFromBasket = () => {
		setInputError(false)
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id,
		})
	}

	const handleSelectChange = value => {
		setSelectValue(value)
		if (value == 0) {
			dispatch({
				type: 'REMOVE_FROM_BASKET',
				id
			})
		} else if (value > 0 && value < 10) {
			dispatch({
				type: 'CHANGE_CANTIDAD_BASKET',
				action: { id, value },
			})
		} else {
			setAddMoreItems(true)
		}
	}

	const handleUpdateCantidad = () => {
		setInputError(false)
		if (input < 0) return setInputError(true)
		if(input == 0) {
			dispatch({
				type: 'REMOVE_FROM_BASKET',
				id
			})
		} else if (input > 0) {
			dispatch({
				type: 'CHANGE_CANTIDAD_BASKET',
				action: { id, value: parseInt(input) },
			})
		}
	}

	return (
		<div className={styles.checkoutProduct}>
			<img src={image} alt={title} className={styles.checkoutProduct__image} />

			<div className={styles.checkoutProduct__info}>
				<div className={styles.checkoutProduct__containerTitlePrice}>
					<p className={styles.checkoutProduct__title}>{title}</p>
					<p className={styles.checkoutProduct__price}>
						<span>$</span>
						<strong>{price.toFixed(2)}</strong>
					</p>
				</div>
				<div className={styles.checkoutProduct__rating}>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				<div className={styles.checkoutProduct__options}>
					{!addMoreItems ? (
						<select
							value={selectValue}
							className={styles.checkoutProduct__select}
							onChange={e => handleSelectChange(parseInt(e.target.value))}
						>
							<option value={0}>0 (Eliminar)</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10+</option>
						</select>
					) : (
						<div className={styles.checkoutProduct__containerInputButtonUpdate}>
							<input
								type='number'
								value={input}
								onChange={e => setInput(e.target.value)}
								className={
									!inputError
										? styles.checkoutProduct__input
										: [
												styles.checkoutProduct__input,
												styles.checkoutProduct__inputError,
										  ].join(' ')
								}
							/>
							<button
								className={styles.checkoutProduct__updateButton}
								onClick={handleUpdateCantidad}
							>
								Update
							</button>
						</div>
					)}

					<button
						onClick={removeFromBasket}
						className={styles.checkoutProduct__removeButton}
					>
						Remove from basket
					</button>
				</div>
			</div>
		</div>
	)
}

export default CheckoutProduct
