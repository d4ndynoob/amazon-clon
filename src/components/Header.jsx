import styles from '../styles/header.module.css' // CSS
import { Link } from 'react-router-dom' // Links navegacion
import Logo from '../assets/logo.png' // Logo
import { FaSearch, FaShoppingCart } from 'react-icons/fa' // Iconos FontAwsome
import { useBasketContext } from '../context/Basket/BasketState' // Contexto Basket
import { useUserContext } from '../context/User/UserState'
import { auth } from '../firebase.js'

function Header() {
	const basket = useBasketContext()[0]
	const user = useUserContext()[0]

	const login = () => {
		if (user) {
			auth.signOut()
		}
	}

	return (
		<nav className={styles.header}>
			{/* Logo on the top left */}
			<Link to='/'>
				<img src={Logo} alt='Amazon Logo' className={styles.header__logo} />
			</Link>

			{/* Search box */}
			<div className={styles.header__search}>
				<input type='text' className={styles.header__searchInput} />
				<FaSearch className={styles.header__searchIcon} />
			</div>

			{/* 3 links */}
			<div className={styles.header__nav}>
				{/* 1st link */}
				<Link to={!user && '/login'} className={styles.header__link}>
					<div className={styles.header__option} onClick={login}>
						<span className={styles.header__optionLineOne}>
							Hello {user ? user.email : ', identify yourself'}
						</span>
						<span className={styles.header__optionLineTwo}>
							{!user ? 'Sign In' : 'Sign out'}
						</span>
					</div>
				</Link>

				{/* 2st link */}
				<Link to='/' className={styles.header__link}>
					<div className={styles.header__option}>
						<span className={styles.header__optionLineOne}>Returns</span>
						<span className={styles.header__optionLineTwo}>& Ordenrs</span>
					</div>
				</Link>

				{/* 3st link */}
				<Link to='/' className={styles.header__link}>
					<div className={styles.header__option}>
						<span className={styles.header__optionLineOne}>Your</span>
						<span className={styles.header__optionLineTwo}>Prime</span>
					</div>
				</Link>

				{/* 4th link */}
				<Link to='/checkout' className={styles.header__link}>
					<div className={styles.header__optionBasket}>
						{/* Shopping basket icon */}
						<FaShoppingCart />
						{/* Number of items in the basket */}
						<span
							className={[
								styles.header__optionLineTwo,
								styles.header__basketCount,
							].join(' ')}
						>
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Header
