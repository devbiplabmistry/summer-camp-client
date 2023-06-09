import React from 'react';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import Card from '../../../Components/Card';

const SelectedClass = () => {
    const selectClass = useSelectedClass();
    console.log(selectClass);
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                selectClass.map(item => <Card key={item._id} item={item}></Card> )

            }
        </div>
    );
};

export default SelectedClass;