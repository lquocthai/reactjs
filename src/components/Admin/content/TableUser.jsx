import { getAllUser } from "../../../services/apiService";
import { useEffect, useState } from "react"

const TableUser = (props) => {
    const [listUser, setListUser] = useState([])

    // useEffect chayj sau khi render ra html duoi roi
    //componentDisMount
    // khoong sử dụng async trong effect
    useEffect(() => {
        fecthListUser();
    }, []);

    const fecthListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&

                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>@{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning mx-3">Update</button>
                                        <button className="btn btn-danger">Delete</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>not found data </td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}
export default TableUser