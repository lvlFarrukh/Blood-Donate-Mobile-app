import React from 'react'
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


const DonnerList = () => {
    return (
        
        <ListItem thumbnail>
            <Left>
                <Thumbnail style={{borderWidth: 2}} square source={require('../../media/user.png')} />
            </Left>
            <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
            </Body>
            <Right>
                <Button transparent>
                <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
        
    )
}

export default DonnerList
