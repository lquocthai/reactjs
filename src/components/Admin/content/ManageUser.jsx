import ModelCreateUser from "./ModelCreateUser";
import './ManageUser.scss'
import { FiPlusCircle } from "react-icons/fi";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiService";
import { useEffect, useState } from "react"
const ManageUser = (props) => {
    const [showModelCreateUser, setShowModelCreateUser] = useState(false)
    const [listUser, setListUser] = useState([])

    // useEffect chayj sau khi render ra html duoi roi
    //componentDisMount
    // khoong sử dụng async trong effect
    useEffect(() => {
        fetchListUser();
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }
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
                    <TableUser listUser={listUser} />
                </div>
                <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    fetchListUser={fetchListUser} />
            </div>
        </div>
    )
}
export default ManageUser;