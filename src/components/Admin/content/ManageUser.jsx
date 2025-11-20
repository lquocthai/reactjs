import ModelCreateUser from "./ModelCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage Users
            </div>
            <div className="users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    table users
                    <ModelCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;