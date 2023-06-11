import { RxCross1 } from 'react-icons/rx';

const EmptyState = () => {
    return (
        <div className='flex flex-row items-center gap-5'>
            <RxCross1 size={25} className='text-red-500 group-hover:text-white' />
            <span className='group-hover:text-white'>No Info</span>
        </div>
    );
}

export default EmptyState;