import React from 'react';
import {RouteComponentProps} from '@reach/router';
import HeaderRD from '../Components/HeaderRD';
import Section2RD from '../Components/Section2RD';
import Footer from '../Components/Footer'

function ResturantDetail(props:RouteComponentProps) {
    return (
        <React.Fragment>
            <HeaderRD/>
            <Section2RD/>
            <Footer/>
        </React.Fragment>
    )
}

export default ResturantDetail
