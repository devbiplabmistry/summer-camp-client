
import useSelectedClass from '../../../Hooks/useSelectedClass';
import SelectCard from '../selectedCard/SelectCard';

const SelectedClass = () => {
    const selectClass = useSelectedClass();
    // console.log(selectClass);
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                selectClass[0].map(item => <SelectCard key={item._id} item={item}></SelectCard> )

            }
        </div>
    );
};

export default SelectedClass;