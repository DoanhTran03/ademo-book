import { useState } from "react"
import "../../index.css"
import {RxCross2} from "react-icons/rx"
const Modal = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="modal">
        <button className="modal__btn" onClick={() => setIsCollapsed(false)}>Update</button>
        <div className={isCollapsed ? "modal__layer modal__layer--collapsed" : "modal__layer"}>
            <div className="content">
                <span onClick={() => setIsCollapsed(true)} className="icon">
                    <RxCross2 />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Modal