import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../../../features/api/apiSlice';

export default function Form() {
	// ! Required hooks and variables
	const [addBook, { isSuccess }] = useAddBookMutation();

	const navigate = useNavigate();
	const [bookDetails, setBookDetails] = useState({
		name: '',
		author: '',
		thumbnail: '',
		price: '',
		rating: '',
		featured: false,
	});

	const handleAddBook = (e) => {
		e.preventDefault();

		addBook(bookDetails);
	};

	if (isSuccess) {
		navigate('/');
		alert('Success');
	}

	return (
		<form className='book-form' onSubmit={handleAddBook}>
			<div className='space-y-2'>
				<label htmlFor='lws-bookName'>Book Name</label>
				<input
					required
					className='text-input'
					type='text'
					id='lws-bookName'
					name='name'
					value={bookDetails.name}
					onChange={(e) =>
						setBookDetails({ ...bookDetails, name: e.target.value })
					}
				/>
			</div>

			<div className='space-y-2'>
				<label htmlFor='lws-author'>Author</label>
				<input
					required
					className='text-input'
					type='text'
					id='lws-author'
					name='author'
					value={bookDetails.author}
					onChange={(e) =>
						setBookDetails({
							...bookDetails,
							author: e.target.value,
						})
					}
				/>
			</div>

			<div className='space-y-2'>
				<label htmlFor='lws-thumbnail'>Image Url</label>
				<input
					required
					className='text-input'
					type='text'
					id='lws-thumbnail'
					name='thumbnail'
					value={bookDetails.thumbnail}
					onChange={(e) =>
						setBookDetails({
							...bookDetails,
							thumbnail: e.target.value,
						})
					}
				/>
			</div>

			<div className='grid grid-cols-2 gap-8 pb-4'>
				<div className='space-y-2'>
					<label htmlFor='lws-price'>Price</label>
					<input
						required
						className='text-input'
						type='number'
						id='lws-price'
						name='price'
						value={bookDetails.price}
						onChange={(e) =>
							setBookDetails({
								...bookDetails,
								price: parseInt(e.target.value),
							})
						}
					/>
				</div>

				<div className='space-y-2'>
					<label htmlFor='lws-rating'>Rating</label>
					<input
						required
						className='text-input'
						type='number'
						id='lws-rating'
						name='rating'
						min='1'
						max='5'
					/>
				</div>
			</div>

			<div className='flex items-center'>
				<input
					id='lws-featured'
					type='checkbox'
					name='featured'
					className='w-4 h-4'
					checked={bookDetails.featured}
					onChange={(e) =>
						setBookDetails({
							...bookDetails,
							featured: e.target.value ? true : false,
						})
					}
				/>
				<label htmlFor='lws-featured' className='ml-2 text-sm'>
					{' '}
					This is a featured book{' '}
				</label>
			</div>

			<button
				type='submit'
				className='w-full py-2 border-2 border-gray-300 text-slate-400 font-semibold rounded duration-300 hover:bg-blue-400 hover:text-white hover:border-blue-400'
				id='lws-submit'>
				Add Book
			</button>
		</form>
	);
}
