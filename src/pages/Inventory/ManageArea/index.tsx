import { useState } from 'react'
import AddNew from './AddNew'
import SortArea from './SortArea';

const ManageArea = () => {
  let [option,setOption] = useState(false);
  return (
    <div className='manageArea'>
            <ul className="manageArea__option">
                <li><a className={option ? "" : "active"} onClick={() => setOption(false)}>Add New</a></li>
                <li><a className={option ? "active" : ""} onClick={() => setOption(true)}>Sorting List</a></li>
            </ul>
            {option == false ? <AddNew></AddNew> : <SortArea></SortArea>}
    </div>
  )
}

export default ManageArea