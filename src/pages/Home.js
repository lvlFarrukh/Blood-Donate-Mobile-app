import React, {useEffect} from 'react'
// import {BackHandler} from 'react-native'
import {H5, H2,Card, CardItem, Icon, Right, Body, Title, Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';


const Home = (props) => {
    return (
        <Container>
        <Header style={{backgroundColor: '#8e0808'}}>
            <Body>
                <Title style={{marginLeft: 10, fontSize: 25}}><Icon style={{color: 'white'}} name='home'/> Home</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='bell' />
                </Button>
            </Right>
        </Header>

        <Card>
            <CardItem>
              <Body>
                <Text style={{fontSize: 15, marginBottom: 5}}>User id: 0149</Text>
                <H2>Hello, Farrukh</H2>
              </Body>
            </CardItem>
        </Card>

        <Content />
        <Footer>
          <FooterTab style={{backgroundColor: '#8e0808'}}>
            <Button>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Home</Text>
            </Button>
            <Button onPress={()=>{
                props.navigation.navigate('Doner')
            }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Find Doner</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
}

export default Home
