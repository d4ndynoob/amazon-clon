import styles from './checkout.module.css' // CSS
import Ad from '../../assets/ad.jpg' // Banner
import Header from '../../components/Header' // Componentes
import CheckoutProduct from '../../components/CheckoutProduct' // Componentes
import Subtotal from '../../components/Subtotal' // Componentes
import { useBasketContext } from '../../context/Basket/BasketState' // Contexto

function Checkout() {
	const [basket, dispatch] = useBasketContext()

	const removeAllFromBasket = () => {
		dispatch({
			type: 'REMOVE_ALL_FROM_BASKET',
		})
	}

	return (
		<>
			<Header />
			<div className={styles.checkout}>
				<div className={styles.checkout__left}>
					<img src={Ad} alt='Ad' className={styles.checkout__ad} />
					{basket?.length === 0 ? (
						<div className={styles.checkout__containerEmpty}>
							<h2>Your Shopping Basket is empty</h2>
							<p>
								You have no items in your basket. To buy one or more, clic "Add
								to basket" next to the item
							</p>
						</div>
					) : (
						<div className={styles.checkout__cart_group}>
							<div className={styles.checkout__titleGroup}>
								<h2 className={styles.checkout__title}>Your Shopping Basket</h2>
								<button onClick={removeAllFromBasket}>
									Deseleccionar todos los artículos
								</button>
							</div>

							{/* List out all of the checkout products  */}
							{basket.map(item => (
								<CheckoutProduct
									key={item.producto.id}
									id={item.producto.id}
									title={item.producto.title}
									image={item.producto.image}
									price={item.producto.price}
									rating={item.producto.rating}
									cantidad={item.cantidad}
								/>
							))}
						</div>
					)}
				</div>
				{basket?.length > 0 && (
					<div className={styles.checkout__right}>
						<h1 className={styles.checkout__subtotal}>Subtotal</h1>
						<Subtotal />
					</div>
				)}
			</div>
		</>
	)
}

export default Checkout
