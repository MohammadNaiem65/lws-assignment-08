import Books from './Books/Books';
import Header from './Header/Header';

export default function Home() {
	return (
		<main className='py-12 px-6 2xl:px-6 container'>
			<div className='order-2 xl:-order-1'>
				<Header />

				<Books />
			</div>
		</main>
	);
}
