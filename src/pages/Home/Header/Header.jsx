import { useDispatch, useSelector } from 'react-redux';
import { filterByType } from '../../../features/filter/filterSlice';

export default function Header() {
	// ! Required hooks and variables
	const { type } = useSelector((state) => state.filters);
	const dispatch = useDispatch();

	const handleToggleBookType = (type) => {
		dispatch(filterByType(type));
	};
	return (
		<div className='flex items-center justify-between mb-12'>
			<h4 className='mt-2 text-xl font-bold'>Book List</h4>

			<div className='flex items-center space-x-4'>
				<button
					className={`lws-filter-btn duration-300 ${
						type === 'All' && 'active-filter'
					}`}
					onClick={() => handleToggleBookType('All')}>
					All
				</button>
				<button
					className={`lws-filter-btn duration-300 ${
						type === 'Featured' && 'active-filter'
					}`}
					onClick={() => handleToggleBookType('Featured')}>
					Featured
				</button>
			</div>
		</div>
	);
}
