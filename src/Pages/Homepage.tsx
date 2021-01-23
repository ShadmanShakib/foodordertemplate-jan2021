import React from 'react';
import { RouteComponentProps} from '@reach/router'
import MainsectionHP from '../Components/MainsectionHP';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Appdownload from '../Components/Appdownload';
import BasicInfo from '../Components/BasicInfo';
import Footer from '../Components/Footer';


function Homepage(props: RouteComponentProps) {
    return (
        <React.Fragment>
            <MainsectionHP/>
            <Section2/>
            <Section3/>
            <Appdownload/>
            <BasicInfo/>
            <Footer/>
         
            
        </React.Fragment>
    )
}

export default Homepage
