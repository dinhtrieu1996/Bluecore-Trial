import React from 'react';
import PropTypes from 'prop-types';
FormTrial.propTypes = {
    valueInputs: PropTypes.object,
    errorInputs: PropTypes.object,
    changeIsCheck: PropTypes.func,
    errorAllow: PropTypes.bool,
    handleValueName: PropTypes.func,
    handleValidation: PropTypes.func,
    onSubmitForm: PropTypes.func,
};
FormTrial.defaultProps = {
    valueInputs: [],
    errorInputs: [],
    changeIsCheck: null,
    errorAllow: false,
    handleValueName: null,
    handleValidation: null,
    onSubmitForm: null,

}
function FormTrial(props) {
    const { onSubmitForm, handleValueName, valueInputs, errorInputs, changeIsCheck, errorAllow,handleValidation } = props;
    const { user_full_name, phone, email, org_name } = valueInputs;
    const { errorFullName, errorPhone, errorEmail, errorOrgName } = errorInputs;
    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmitForm) return;
        if (handleValidation()) {
            const formValues = valueInputs;
            onSubmitForm(formValues);
        }
    }
    return (
        <div className="site-main mg-t74">
            <div className="form-trial-wrapper">
                <h3 className="title-form mg-b32">Bắt đầu 14 ngày dùng thử miễn phí Bluecore</h3>
                <form className="form-trial" onSubmit={handleSubmit}>
                    <div className={errorFullName !== '' ? 'form-group field-error mg-b16' : 'form-group mg-b16'}>
                        <div className="form-control-bluecore">
                            <input onChange={handleValueName} type="text" data-valid="errorFullName" className="form-input pd-t24" id="user_full_name" name="user_full_name" value={user_full_name} placeholder="Nhập họ tên*" />
                            <label className="title-field color-80" htmlFor="user_full_name">Họ tên</label>
                            {errorFullName !== '' ?
                                <span className="input-icon error-icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="#F94F4F"></path>
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="white" fillOpacity="0.2"></path>
                                    </svg>
                                </span>
                                : ''
                            }
                            <span className="input-icon success-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99992 1.33325C4.31992 1.33325 1.33325 4.31992 1.33325 7.99992C1.33325 11.6799 4.31992 14.6666 7.99992 14.6666C11.6799 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.6799 1.33325 7.99992 1.33325ZM6.66659 11.3333L3.33325 7.99992L4.27325 7.05992L6.66659 9.44659L11.7266 4.38659L12.6666 5.33325L6.66659 11.3333Z" fill="#6EDC6A"></path>
                                </svg>
                            </span>
                        </div>
                        {errorFullName !== '' ? <p className="error-field-text">{errorFullName}</p> : ''}
                    </div>
                    <div className={errorPhone !== '' ? 'form-group field-error mg-b16' : 'form-group mg-b16'}>
                        <div className="form-control-bluecore">
                            <input onChange={handleValueName} type="text" data-valid="errorPhone" className="form-input pd-t24" id="phone" name="phone" value={phone} placeholder="Nhập số điện thoại*" />
                            <label className="title-field color-80" htmlFor="phone">Số điện thoại</label>
                            {errorPhone !== '' ?
                                <span className="input-icon error-icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="#F94F4F"></path>
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="white" fillOpacity="0.2"></path>
                                    </svg>
                                </span>
                                : ''
                            }
                            <span className="input-icon success-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99992 1.33325C4.31992 1.33325 1.33325 4.31992 1.33325 7.99992C1.33325 11.6799 4.31992 14.6666 7.99992 14.6666C11.6799 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.6799 1.33325 7.99992 1.33325ZM6.66659 11.3333L3.33325 7.99992L4.27325 7.05992L6.66659 9.44659L11.7266 4.38659L12.6666 5.33325L6.66659 11.3333Z" fill="#6EDC6A"></path>
                                </svg>
                            </span>
                        </div>
                        {errorPhone !== '' ? <p className="error-field-text">{errorPhone}</p> : ''}
                    </div>
                    <div className={errorEmail !== '' ? 'form-group field-error mg-b16' : 'form-group mg-b16'}>
                        <div className="form-control-bluecore">
                            <input onChange={handleValueName} type="text" data-valid="errorEmail" className="form-input pd-t24" id="email" name="email" value={email} placeholder="Nhập email của bạn*" />
                            <label className="title-field color-80" htmlFor="email">Email</label>
                            {errorEmail !== '' ?
                                <span className="input-icon error-icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="#F94F4F"></path>
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="white" fillOpacity="0.2"></path>
                                    </svg>
                                </span>
                                : ''
                            }
                            <span className="input-icon success-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99992 1.33325C4.31992 1.33325 1.33325 4.31992 1.33325 7.99992C1.33325 11.6799 4.31992 14.6666 7.99992 14.6666C11.6799 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.6799 1.33325 7.99992 1.33325ZM6.66659 11.3333L3.33325 7.99992L4.27325 7.05992L6.66659 9.44659L11.7266 4.38659L12.6666 5.33325L6.66659 11.3333Z" fill="#6EDC6A"></path>
                                </svg>
                            </span>
                        </div>
                        {errorEmail !== '' ? <p className="error-field-text">{errorEmail}</p> : ''}
                    </div>
                    <div className={errorOrgName !== '' ? 'form-group field-error mg-b16' : 'form-group mg-b16'}>
                        <div className="form-control-bluecore">
                            <input onChange={handleValueName} type="text" data-valid="errorOrgName" className="form-input pd-t24" id="org_name" name="org_name" value={org_name} placeholder="Nhập tên cửa hàng*" />
                            <label className="title-field color-80" htmlFor="org_name">Tên cửa hàng</label>
                            {errorOrgName !== '' ?
                                <span className="input-icon error-icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="#F94F4F"></path>
                                        <path d="M7.33337 9.99992H8.66671V11.3333H7.33337V9.99992ZM7.33337 4.66659H8.66671V8.66659H7.33337V4.66659ZM7.99337 1.33325C4.31337 1.33325 1.33337 4.31992 1.33337 7.99992C1.33337 11.6799 4.31337 14.6666 7.99337 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 7.99337 1.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333Z" fill="white" fillOpacity="0.2"></path>
                                    </svg>
                                </span>
                                : ''
                            }
                            <span className="input-icon success-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99992 1.33325C4.31992 1.33325 1.33325 4.31992 1.33325 7.99992C1.33325 11.6799 4.31992 14.6666 7.99992 14.6666C11.6799 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.6799 1.33325 7.99992 1.33325ZM6.66659 11.3333L3.33325 7.99992L4.27325 7.05992L6.66659 9.44659L11.7266 4.38659L12.6666 5.33325L6.66659 11.3333Z" fill="#6EDC6A"></path>
                                </svg>
                            </span>
                        </div>
                        {!errorOrgName !== '' ? <p className="error-field-text">{errorOrgName}</p> : ''}
                    </div>
                    <div className="bluecore-info-footer mg-b24 form-group">
                        <label className="bluecore-checkbox-square" htmlFor="allow_policy" onChange={changeIsCheck}>
                            <input type="checkbox" name="allow_policy" id="allow_policy" className="input-checkbox" />
                            <span className="bluecore-checkbox-fk"></span>
                            <span className="checkbox-title">
                                Tôi đồng ý với <a href="/#">Quy định sử dụng</a> và <a href="/#">Chính sách bảo
                                    mật</a> của Bluecore
                            </span>
                        </label>
                        {errorAllow ? <p className="error-field-text">Đọc kĩ và đồng ý với điều khoản</p> : ''}

                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn-bluecore btn-primary" >Đăng ký dùng thử</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FormTrial;