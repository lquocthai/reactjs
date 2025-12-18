import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiPlusCircle } from "react-icons/fi";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiService';
import _ from 'lodash';

const ModelUpdateUser = (props) => {
    // bây giờ lấy show từ props cha truyền xuống không tạo usestate nữa
    const { show, setShow, dataUpdate } = props;

    // const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("")

    // useeffect mỗi lần dataUpdate thay đổi thì hàm effect chạy lại nên để vào depen
    useEffect(() => {
        console.log(`run effect`, dataUpdate)
        // import lodash _ check điều kiện mảng arrayy....
        if (!_.isEmpty(dataUpdate)) {
            //update state
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role)
            setImage("");
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate])
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER")
        setImage("");
        setPreviewImage("");
        props.requestUpdateData()
    };
    // const handleShow = () => setShow(true);

    const handleUpLoadImage = (event) => {
        // convert anhr thaành dạng blob
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }
    const handleSubmitCreateUser = async () => {

        //call api
        // api nào có tuyền file thì phải dùng formdata
        // submit data


        let data = await putUpdateUser(dataUpdate.id, username, role, image);
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            await props.fetchListUser();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    console.log(`render`)
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='model-add-user'
            >

                <Modal.Header closeButton>
                    <Modal.Title>Update A User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                disabled
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value={"USER"}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            {/* //htmlFor  sẽ mapping đến thẻ có id trùng với nó */}
                            <label
                                className="form-label label-upload "
                                htmlFor='labelUpload'>
                                <FiPlusCircle />
                                Upload File Image
                            </label>
                            <input
                                type="file"
                                hidden
                                id='labelUpload'
                                onChange={(event) => { handleUpLoadImage(event) }} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModelUpdateUser;