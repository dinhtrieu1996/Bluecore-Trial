import React, { useEffect, useState } from "react";
import HeaderTrial from "../components/header-trial";
import FooterSource from '../components/footer-two';
import Source from "../components/source";
import Cookies from 'universal-cookie';
function PageSource() {
    const [orgId, setOrgId] = useState('');

    useEffect(() => {
        const cookies = new Cookies();
        const getCoockie = cookies.get('uid');
        if (getCoockie === undefined || getCoockie === '') {
            window.location.href = "/register";
        }
        setOrgId('getCoockie');
    }, [])
    return (
        <>
            <HeaderTrial />
            <Source orgId={orgId} />
            <FooterSource />
        </>
    )
}
export default PageSource