import React from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';
import { Modal } from 'react-bootstrap';
const new_cookies = new Cookies();
function handleHome(e) {
    e.preventDefault();
    new_cookies.remove('uid');
    new_cookies.remove('by_step');
    window.location = 'https://bluecore.vn/';
}
function ModalSuccess(props) {
    return (
        <Modal
            {...props}
            size="small"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <span>Bạn vui lòng kiểm tra Mail, để bắt đầu vào cửa hàng của mình.</span>
            </Modal.Body>
            <Modal.Footer>
                <a className="btn-primary btn-backhome" href={"#"} onClick={handleHome}>Về trang chủ</a>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalSuccess;
