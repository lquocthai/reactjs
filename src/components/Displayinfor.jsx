import React, { useEffect, useState } from "react";
import "./Displayinfor.scss"
import logo from "./.././assets/react.svg"

const DisplayInfor = (props) => {
    const { users } = props
    const [isShowHideListUser, setShowHideListUser] = useState(true)
    const handleShowHide = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    console.log('call me render')
    useEffect(() => {
        console.log('call me use effect')
        if (users.length === 0) {
            alert('you deleted all the users')
        }
    }, [users]) // nếu để mảng trống thì k gọi lại hook useEffect ,nếu để biến nào vào thì useEffect sẽ theo dõi biến đó
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHide()}>
                    {isShowHideListUser == true ? "Hide list users: " : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {users.map((user) => {
                        return (
                            // conditional output
                            <div key={user.id} className={+user.age < 18 ? "green" : "red"}>
                                <div>
                                    <p>My name's {user.name}</p>
                                    <p>My age's {user.age}</p>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor