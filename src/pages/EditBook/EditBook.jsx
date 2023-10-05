import { useParams } from 'react-router-dom';
import Form from './Form/Form';
import { useGetBookQuery } from '../../features/api/apiSlice';

export default function EditBook() {
	// ! Required hooks and variables
	const { id } = useParams();
	const { data: video } = useGetBookQuery(id);

	return (
		<main className='py-6 2xl:px-6'>
			<div className='container'>
				<div className='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
					<h4 className='mb-8 text-xl font-bold text-center'>
						Edit Book
					</h4>
					{video?.name && <Form video={video} />}
				</div>
			</div>
		</main>
	);
}
