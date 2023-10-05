import { useGetBooksQuery } from '../../../features/api/apiSlice';
import Book from '../Book/Book';

export default function Books() {
	// ! Required hooks and variables
	const { data: books, isLoading, isSuccess } = useGetBooksQuery();

	// decide what to render
	let content = null;
	if (isLoading) {
		content = <div className='text-center text-lg'>Loading...</div>;
	} else if (!isLoading && isSuccess) {
		content = books.map((book) => <Book key={book.id} book={book} />);
	}

	return (
		<div className='w-11/12 mx-auto space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
			{content}
		</div>
	);
}
