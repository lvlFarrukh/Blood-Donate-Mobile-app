import React, {useEffect} from 'react'
// import {BackHandler} from 'react-native'
import {H5, H2,Card, CardItem, Icon, Right, Body, Title, Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

import MainFooter from '../component/MainFooter'
import MainHeader from '../component/MainHeader'

const Home = (props) => {
    return (
        <Container>
        
        <MainHeader  title={'Home'} mainIcon={'home'} />

        <Card>
            <CardItem>
              <Body>
                <Text style={{fontSize: 15, marginBottom: 5}}>User id: 0149</Text>
                <H2>Hello, Farrukh</H2>
              </Body>
            </CardItem>
        </Card>

        <Content />
        
        <MainFooter navigate = {props.navigation}/>

      </Container>
    )
}

export default Home
