import { Link } from "react-router-dom";
import ProductCard from "../components/ProductsCard";
const Home = () => {
	const addToCardHandler = () => {};
	return (
		<div className='home'>
			<section></section>

			<h1>
				Latest Products
				<Link to='/search' className='findmore'>
					More
				</Link>
			</h1>

			<main>
				<ProductCard
					productId='addd'
					name='Macbook'
					price={4545}
					stock={433}
					handler={addToCardHandler}
					photo='https://m.media-amazon.com/images/I/41DeT328kPL._AC_SX679_.jpg'
				/>
			</main>
		</div>
	);
};

export default Home;
