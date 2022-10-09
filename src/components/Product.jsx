import styles from '../styles/product.module.css' // CSS
import { useBasketContext } from '../context/Basket/BasketState' // Contexto

function Product({ id, title, image, price, rating }) {
	const dispatch = useBasketContext()[1]

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id,
				title,
				image,
				price,
				rating
			}
		})
	}

	return (
		<div className={styles.product}>
			<div className={styles.product__info}>
				<p>{title}</p>
				<p className={styles.product__price}>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className={styles.product__rating}>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	)
}

export default Product
