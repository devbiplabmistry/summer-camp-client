import React from 'react';
import useMyClass from '../../../Hooks/useMyClass';
import AddClassCard from '../../../Components/AddClassCard';

const ManageClass = () => {
    const [addClass] =useMyClass()
    // console.log(addClass);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                addClass.map(item=><AddClassCard key={item._id} item={item} admin={'admin'}></AddClassCard>)
            }
        </div>
    );
};

export default ManageClass;