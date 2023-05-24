'use client';

import useDriverModal from '@/app/hooks/useDriverModal';
import Modal from './Modal';

//ESTO NO HACE NADA AUN

const SelectDriverModal = () => {

    const driverModal = useDriverModal();

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <h1>Pilotoas</h1>
            <hr />
        </div>
    )


    return (
        <Modal
            isOpen={driverModal.isOpen}
            onClose={driverModal.onClose}
            title='Selecciona un piloto'
            body={bodyContent}
        />
    );
}

export default SelectDriverModal;