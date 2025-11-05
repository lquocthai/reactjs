// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./Displayinfor";
// class MyComponent extends React.Component {
//     // jsx
//     state = {
//         listUsers: [
//             { id: 1, name: 'thai dui 1', age: 16 },
//             { id: 2, name: 'thai dui 2', age: 22 },
//             { id: 3, name: 'thai dui 3', age: 33 },
//             { id: 4, name: 'thai dui 4', age: 69 }
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         console.log(userObj)
//         this.setState({
//             // them obj vao mang dung spread de coppy mang dau va them obj sau vao thanh mang moi
//             // khuyến khích code như này dùng toán tử spread
//             // nếu muốn cập nhật vào cuối mảng chỉ cần đổi vị trí 
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUserClone = [...this.state.listUsers];
//         // dùng filter để lọc user có id khác với userId
//         listUserClone = listUserClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUserClone
//         })

//     }
//     render() {
//         // component = teamplate + logic js
//         // DRY : don't repeat yourseft
//         return (
//             // props =>  viet tat cua properties
//             // fragment <></>
//             <>
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                 </div>
//                 <br /> <br />
//                 {/* props */}
//                 {/* truyền function as props cho component (không thêm () sau function)*/}
//                 <div className="a">
//                     <DisplayInfor
//                         users={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}

//                     />
//                 </div>
//             </>
//         );
//     }
// }
const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'thai dui 1', age: 16 },
            { id: 2, name: 'thai dui 2', age: 22 },
            { id: 3, name: 'thai dui 3', age: 33 },
            { id: 4, name: 'thai dui 4', age: 69 }
        ]
    )
    const handleAddNewUser = (userObj) => {
        setListUsers([
            userObj,
            ...listUsers
        ])
    }
    const handleDeleteUser = (userId) => {
        const listUserClone = listUsers.filter(item => item.id !== userId);
        setListUsers(listUserClone)
    }

    return (
        <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
            </div>
            <br /> <br />
            {/* props */}
            {/* truyền function as props cho component (không thêm () sau function)*/}
            <div className="a">
                <DisplayInfor
                    users={listUsers}
                    handleDeleteUser={handleDeleteUser}

                />
            </div>
        </>

    )
}
export default MyComponent;