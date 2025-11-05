import React, { useEffect, useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'tpHcm',
//         age: ''
//     }
//     handleClick = (event) => {
//         console.log("click me")
//         // event.target lay ra doi tuong dang xu li event
//         console.log(event.target)
//         console.log(event)
//         console.log("random ", Math.floor((Math.random() * 100)))
//         // setState
//         this.setState({
//             name: "Lee Quooc Thai"
//         })

//     }
//     // onMouseOver : event khi di chuot vao
//     handleOnMouseOver(event) {
//         console.log(event.pageX)
//     }
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         // ngăn hành vi load lại trang của submit
//         event.preventDefault();
//         // gọi props function đã tuyền từ cha sang con
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100)) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <>
//                 my name is {this.state.name} i'm {this.state.age}
//                 {/* <button onClick={this.handleClick}>click me</button> */}
//                 {/* dung arrow function ngay trong onClick */}
//                 <button onClick={(event) => { this.handleClick(event) }}>click me</button>
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Your name: </label>
//                     <input
//                         // gia tri ban dau co the sua 
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeInput(event) }}
//                     />
//                     <label>Your age: </label>
//                     <input
//                         // gia tri ban dau co the sua 
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeAge(event) }}
//                     />
//                     <button>submit</button>
//                 </form>
//             </>
//         )
//     }
// }
const AddUserInfor = (props) => {
    // state = {
    //     name: '',
    //     address: 'tpHcm',
    //     age: ''
    // }
    // useState hook chia nho ra quan li chu khong nen useState mot obj
    const [name, setName] = useState('')
    const [address, setAddress] = useState('TpHCM')
    const [age, setAge] = useState('')
    const handleClick = () => {
        setName('Le Quoc Thái')
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        // gọi props function đã tuyền từ cha sang con
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100)) + '-random',
            name: name,
            age: age
        })
    }
    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    return (
        <>
            my name is {name} i'm {age}
            {/* <button onClick={this.handleClick}>click me</button> */}
            {/* dung arrow function ngay trong onClick */}
            <button onClick={(event) => handleClick(event)}>click me</button>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    // gia tri ban dau co the sua 
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <label>Your age: </label>
                <input
                    // gia tri ban dau co the sua 
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>submit</button>
            </form>
        </>
    )
}

export default AddUserInfor