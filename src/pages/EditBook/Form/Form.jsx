import { useEffect, useState } from 'react';
import { useEditBookMutation } from '../../../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

export default function Form({ video }) {
	// ! Required hooks and variables
	const { id, name, author, thumbnail, price, rating, featured } = video;
	const [editBook, { isSuccess }] = useEditBookMutation();
	const navigate = useNavigate();
	const [updatedDetails, setUpdatedDetails] = useState({
		name,
		author,
		thumbnail,
		price,
		rating,
		featured,
	});

	const handleUpdateBook = (e) => {
		e.preventDefault();

		editBook({ id, data: updatedDetails });
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	}, [isSuccess, navigate]);

	return (
		<form className='book-form' onSubmit={handleUpdateBook}>
			<div className='space-y-2'>
				<label htmlFor='lws-bookName'>Book Name</label>
				<input
					required
					className='text-input'
					type='text'
					id='lws-bookName'
					name='name'
					value={updatedDetails.name}
					onChange={(e) =>
						setUpdatedDetails({
							...updatedDetails,
							name: e.target.value,
						})
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
					value={updatedDetails.author}
					onChange={(e) =>
						setUpdatedDetails({
							...updatedDetails,
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
					value={updatedDetails.thumbnail}
					onChange={(e) =>
						setUpdatedDetails({
							...updatedDetails,
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
						value={updatedDetails.price}
						onChange={(e) =>
							setUpdatedDetails({
								...updatedDetails,
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
						value={updatedDetails.rating}
						onChange={(e) =>
							setUpdatedDetails({
								...updatedDetails,
								rating: parseInt(e.target.value),
							})
						}
					/>
				</div>
			</div>

			<div className='flex items-center'>
				<input
					id='lws-featured'
					type='checkbox'
					name='featured'
					className='w-4 h-4 cursor-pointer'
					checked={updatedDetails.featured}
					onChange={(e) =>
						setUpdatedDetails({
							...updatedDetails,
							featured: e.target.checked,
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
				Edit Book
			</button>
		</form>
	);
}
