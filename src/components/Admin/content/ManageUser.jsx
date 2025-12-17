import ModelCreateUser from "./ModelCreateUser";
import './ManageUser.scss'
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
import TableUser from "./TableUser";
const ManageUser = (props) => {
    const [showModelCreateUser, setShowModelCreateUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage Users
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModelCreateUser(true)}>
                        <FiPlusCircle />
                        Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser />
                </div>
                <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser} />
            </div>
        </div>
    )
}
export default ManageUser;