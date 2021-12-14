import React, { useState, useEffect } from "react";
import HeaderTrial from "../components/header-trial";
import FooterTwo from '../components/footer-two';
import Process from "../components/process";
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';
import apiDb from "../utils/apis";
import ModalSuccess from "../components/modal-success";
function PageSource(props) {
    const [modalShow, setModalShow] = useState(false);
    const [step, setStep] = useState('0');
    const [cookies, setCookie] = useCookies('');

    const new_cookies = new Cookies();
    const orgId = new_cookies.get('uid');
    if (orgId === undefined || orgId === '') {
        window.location.href = "/register";
    }
    const BASE_URL = 'http://171.244.27.130:8001/trial';

    /*const attr_data_step1 = [{ url: 'database', data: { 'org_id': orgId } }, { url: 'database/table', data: { 'org_id': orgId, 'source': ["Haravan"] } }, { url: 'database/index', data: { 'org_id': orgId, 'source': ["Haravan"] } }];
    const attr_data_step2 = [{ url: 'bigquery/dataset', data: { 'org_id': orgId } }, { url: 'bigquery/table', data: { 'org_id': orgId, 'source': ["Haravan"] } }, { url: 'gcp/serviceAccounts', data: { 'org_id': orgId } }, { url: 'gcp/serviceAccounts/policy', data: { 'org_id': orgId } }, { url: 'gcp/serviceAccounts/key', data: { 'org_id': orgId } }];
    const attr_data_step3 = [{ url: 'metabase/permissions/group', data: { 'org_id': orgId } }, { url: 'metabase/collection', data: { 'org_id': orgId } }, { url: 'metabase/database/bigquery', data: { 'org_id': orgId } }, { url: 'metabase/permissions/database/assign', data: { 'org_id': orgId } }, { url: 'metabase/permissions/collection/assign', data: { 'org_id': orgId } }, { url: 'metabase/user', data: { 'org_id': orgId } }];
    */
    const data_id = { 'org_id': orgId };
    const data_group = { 'org_id': orgId, 'source': ["Haravan"] };
    const headers = {
        'Authorization': 'Bearer vgZE4TFNFfaZqQKUzGsWUBfCfUvUgwABpBwBYDbJbx4sEPJ7TXMZvkohpglT',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    let count = 0;
    let cookieByStep = new_cookies.get('by_step');
    let step_count = cookieByStep === undefined || cookieByStep === '' || isNaN(cookieByStep) ? 0 : parseInt(new_cookies.get('by_step'));
    useEffect(() => {
        switch (step_count) {
            case 1: count = 3; setStep('1'); break
            case 2: count = 8; setStep('2'); break
            case 3: count = 13; setStep('3'); break
            default: count = 0;
        }
        function timeoutApi(ms) {
            return new Promise(function (resolve) {
                setTimeout(resolve, ms)
            })
        }
        function createData() {
            if (step_count === 0) {
                step()
            } else if (step_count === 1) {
                step1()
            } else if (step_count === 2) {
                step2()
            }else{
                setModalShow(true);
            }
        }

        function step() {
            timeoutApi(1000).then(function () {
                apiDb(BASE_URL, 'database', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function () {
                apiDb(BASE_URL, 'database/table', 'post', JSON.stringify(data_group), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'database/index', 'post', JSON.stringify(data_group), headers)
                    .then(response => {
                        setStep('1');
                        setCookie('by_step', '1', { path: '/' });
                    })
                    .catch(error => { console.log(error) })
                return timeoutApi(3000)
            }).then(function (data) {
                apiDb(BASE_URL, 'bigquery/dataset', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(3000)
            }).then(function (data) {
                setTimeout(function () {
                    apiDb(BASE_URL, 'bigquery/table', 'post', JSON.stringify(data_group), headers)
                        .then(response => {  })
                        .catch(error => { console.log(error) })
                }, 2000)
                return timeoutApi(3000)
            }).then(function (data) {
                apiDb(BASE_URL, 'gcp/serviceAccounts', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'gcp/serviceAccounts/policy', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'gcp/serviceAccounts/key', 'post', JSON.stringify(data_id), headers)
                    .then(response => {
                        setStep('2');
                        setCookie('by_step', '2', { path: '/' });
                    })
                    .catch(error => { console.log(error) })

                return timeoutApi(3000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/group', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/collection', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/database/bigquery', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/database/assign', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/collection/assign', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/user', 'post', JSON.stringify(data_id), headers)
                    .then(response => {
                        setStep('3');
                        setCookie('by_step', '3', { path: '/' });
                        setModalShow(true);
                    })
                    .catch(error => { console.log(error) })
            })
        }
        function step1() {
            timeoutApi(1000).then(function (data) {
                apiDb(BASE_URL, 'bigquery/dataset', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(3000)
            }).then(function (data) {
                setTimeout(function () {
                    apiDb(BASE_URL, 'bigquery/table', 'post', JSON.stringify(data_group), headers)
                        .then(response => {  })
                        .catch(error => { console.log(error) })
                }, 2000)
                return timeoutApi(3000)
            }).then(function (data) {
                apiDb(BASE_URL, 'gcp/serviceAccounts', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'gcp/serviceAccounts/policy', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'gcp/serviceAccounts/key', 'post', JSON.stringify(data_id), headers)
                    .then(response => {
                        setStep('2');
                        setCookie('by_step', '2', { path: '/' });
                    })
                    .catch(error => { console.log(error) })

                return timeoutApi(3000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/group', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/collection', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/database/bigquery', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/database/assign', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/collection/assign', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/user', 'post', JSON.stringify(data_id), headers)
                    .then(response => {
                        setStep('3');
                        setCookie('by_step', '3', { path: '/' });
                        setModalShow(true);
                    })
                    .catch(error => { console.log(error) })
            })
            
        }
        function step2() {
            timeoutApi(1000).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/group', 'post', JSON.stringify(data_id), headers)
                    .then(response => {  })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/collection', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/database/bigquery', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/database/assign', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/permissions/collection/assign', 'post', JSON.stringify(data_id), headers)
                    .then(response => { })
                    .catch(error => { console.log(error) })
                return timeoutApi(1000)
            }).then(function (data) {
                apiDb(BASE_URL, 'metabase/user', 'post', JSON.stringify(data_id), headers)
                    .then(response => {
                        
                        setStep('3');
                        setCookie('by_step', '3', { path: '/' });
                        setModalShow(true);
                    })
                    .catch(error => { console.log(error) })
            })
        }
        createData();
    }, []);
    return (
        <>
            <HeaderTrial />
            <Process step={step} id={cookies} />
            <FooterTwo />
            <ModalSuccess show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}
export default PageSource