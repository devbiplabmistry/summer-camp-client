import React from 'react';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import SelectCard from '../selectedCard/SelectCard';

const SelectedClass = () => {
    const selectClass = useSelectedClass();
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                selectClass.map(item => <SelectCard key={item._id} item={item}></SelectCard> )

            }
        </div>
    );
};

export default SelectedClass;