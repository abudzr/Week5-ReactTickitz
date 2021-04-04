import React, { Component, Fragment } from 'react'
import { NavigationUser, HeaderHome, CardsNowShow, CardsUpComing, Footers, CardEmail } from '../../../components'
import NowShowingPart from '../../../parts/NowShowing/NowShowing'
import UpComingPart from '../../../parts/upComing/UpComing'

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import style from './home.module.css'
import axios from 'axios'
import Button from '../../../components/Button'

class Home extends Component {

    render() {
        return (
            <Fragment>
                <NavigationUser />
                <HeaderHome />
                <NowShowingPart />
                <UpComingPart />

                <Container>
                    <CardEmail
                        title='Be the vanguard of the'
                        subTitle='By joining you as a Tickitz member,
                        we will always send you the latest updates via email .'
                    />

                </Container>
                <Footers />
            </Fragment>
        )
    }
}

export default Home