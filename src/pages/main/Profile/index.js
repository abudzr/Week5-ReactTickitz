import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, CardsProfile, Footers } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'



class Profile extends Component {
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <CardsProfile />
                <Footers />
            </Fragment>
        )
    }
}

export default Profile