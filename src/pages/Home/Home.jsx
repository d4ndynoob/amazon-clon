import styles from './home.module.css' // CSS
import Header from '../../components/Header' // Componente
import Product from '../../components/Product' // Componente
// import { useState } from 'react'
import productos from '../../db/productos.js' // lista de productos

function Home() {
	return (
		<>
			<Header />
			<div className={styles.home}>
				<img
					className={styles.home__image}
					src='https://m.media-amazon.com/images/I/71fAkmk+AZL._SX3000_.jpg'
					alt=''
				/>
				{/* map */}
				<div className={styles.home__row}>
					{productos.map(producto => {
						return (
							<Product
								key={producto.id}
								id={producto.id}
								title={producto.title}
								price={producto.price}
								rating={producto.rating}
								image={producto.image}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Home
