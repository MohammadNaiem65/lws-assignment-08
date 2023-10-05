import { useSelector } from 'react-redux';
import { matchSorter } from 'match-sorter';
import { useGetBooksQuery } from '../../../features/api/apiSlice';
import Book from '../Book/Book';

export default function Books() {
	// ! Required hooks and variables
	const { keyword, type } = useSelector((state) => state.filters);
	const { data: books, isLoading, isSuccess } = useGetBooksQuery();

	// decide what to render
	let content = null;
	if (isLoading) {
		content = <div className='text-center text-lg'>Loading...</div>;
	} else if (!isLoading && isSuccess) {
		// filter books
		const filteredBooks = matchSorter(books, keyword, {
			keys: ['name'],
		}).filter((book) => {
			if (type === 'All') {
				return true;
			} else if (type === 'Featured' && book.featured) {
				return true;
			}
		});

		content = filteredBooks.map((book) => (
			<Book key={book.id} book={book} />
		));
	}

	return (
		<div className='w-11/12 mx-auto space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
			{content}
		</div>
	);
}
