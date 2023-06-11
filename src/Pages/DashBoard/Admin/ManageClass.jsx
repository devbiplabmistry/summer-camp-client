
import AddClassCard from '../../../Components/AddClassCard';
import useManageClass from '../../../Hooks/useManageClass';

const ManageClass = () => {
    const manageClass=useManageClass()
    // console.log(manageClass);
    return (
        <div className='grid grid-cols-3 gap-4 my-20'>
            {
                manageClass.map(item=><AddClassCard key={item._id} item={item} admin={'admin'}></AddClassCard>)
            }
        </div>
    );
};

export default ManageClass;