import React, { useState } from "react";
import FormTrialTest from '../components/form-trial-test';
import HeaderTrial from "../components/header-trial";
import FooterTrial from '../components/footer-trial';
import { useCookies } from 'react-cookie';
import axios from "axios";
function PageTrial() {
    /* eslint-disable */
    const [valueInputs, setValueInputs] = useState({
        user_full_name: '',
        phone: '',
        email: '',
        org_name: ''
    })
    const { user_full_name, phone, email, org_name } = valueInputs;
    const [errorInputs, setErrorInputs] = useState({
        errorFullName: '',
        errorPhone: '',
        errorEmail: '',
        errorOrgName: ''
    })
    const [checkAllow, setCheckAllow] = useState(false);
    const [errorAllow, setErrorAllow] = useState(false);
    const [cookies, setCookie] = useCookies('');

    function handleValueName(e) {
        const name = e.target.name;
        const name_valid = e.target.dataset.valid;
        const value = name === 'phone' ? e.target.value.replace(/[^0-9\.]/g, '') : e.target.value;
        setValueInputs({ ...valueInputs, [name]: value });
        setErrorInputs({ ...errorInputs, [name_valid]: '' });
    }
    function handleValidation() {
        let formIsValid = true;
        let textIsValid = true;
        if (!org_name || org_name === ' ') {
            formIsValid = false;
            textIsValid = false;
            setErrorInputs({ ...errorInputs, errorOrgName: 'Không được bỏ trống' });
        }
        if (!email || email === ' ') {
            formIsValid = false;
            textIsValid = false;
            setErrorInputs({ ...errorInputs, errorEmail: 'Không được bỏ trống' });
        }
        if (typeof email !== "undefined") {
            if (!email.match(/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g)) {
                formIsValid = false;
                textIsValid = false;
                setErrorInputs({ ...errorInputs, errorEmail: 'Email không đúng định dạng' });
            }
        }
        if (!phone || phone === ' ') {
            formIsValid = false;
            textIsValid = false;
            setErrorInputs({ ...errorInputs, errorPhone: 'Không được bỏ trống' });
        }
        if (!user_full_name || user_full_name === '') {
            formIsValid = false;
            textIsValid = false;
            setErrorInputs({ ...errorInputs, errorFullName: 'Không được bỏ trống' });
        }
        if (!errorAllow && textIsValid && !checkAllow) {
            formIsValid = false;
            setErrorAllow(true);
        }
        return formIsValid;
    }
    function changeIsCheck(e) {
        setCheckAllow(e.target.checked);
        setErrorAllow(false);
    }
    function onSubmitForm(formValues) {
        const headers = {
            'Authorization': 'Bearer vgZE4TFNFfaZqQKUzGsWUBfCfUvUgwABpBwBYDbJbx4sEPJ7TXMZvkohpglT',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        try {
            
            axios({
                url: 'http://171.244.27.130:8001/trial/account',
                method: 'POST',
                data: JSON.stringify(formValues),
                headers: headers,
                contentType: 'application/json',
            })
                .then((response) => {
                    setCookie('uid', response.data.data.id , { path: '/' });
                    window.location = '/source';
                })
                .catch((e) => {
                    var text_error = e.response.data.error
                    switch (text_error) {
                        case "Organization name existed": return setErrorInputs({ ...errorInputs, errorOrgName: 'Tên cửa hàng đã tồn tại' });
                        case "Email existed": return setErrorInputs({ ...errorInputs, errorEmail: 'Email đã tồn tại' });
                        case "Phone existed": return setErrorInputs({ ...errorInputs, errorPhone: 'Số điện thoại đã tồn tại' });
                        default: return null;
                    }
                })
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <>
            <HeaderTrial />
            <FormTrialTest
                handleValueName={handleValueName}
                valueInputs={valueInputs}
                errorInputs={errorInputs}
                handleValidation={handleValidation}
                changeIsCheck={changeIsCheck}
                errorAllow={errorAllow}
                handleValidation={handleValidation}
                onSubmitForm={onSubmitForm}
            />
            <FooterTrial />
        </>
    )
}
export default PageTrial