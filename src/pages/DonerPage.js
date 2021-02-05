import React, {useState} from 'react'
import {ScrollView} from 'react-native'
import {H3, Container, List } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';

import ListItem from '../component/DonnerList'
import MainFooter from '../component/MainFooter'
import MainHeader from '../component/MainHeader'


const DonerPage = (props) => {
    const [bloodG, setBloodG] = useState(undefined)

    return (
        <Container>

            <MainHeader title={'Doner'} mainIcon={'person'} />

                    <H3 style={{alignSelf: 'center', fontWeight: 'bold', margin: 20}}>Select Blood Group</H3>

                    <DropDownPicker
                        placeholder={'Select'}
                        items={[
                            {label: 'A+', value: 'A+'},
                            {label: 'A-', value: 'A-'},
                            {label: 'B+', value: 'B+'},
                            {label: 'B-', value: 'B-'},
                            {label: 'AB+', value: 'AB+'},
                            {label: 'AB-', value: 'AB-'},
                            {label: 'O+', value: 'O+'},
                            {label: 'O-', value: 'O-'},
                        ]}
                        defaultValue={bloodG}
                        containerStyle={{height: 50, marginTop: 5, marginBottom: 20}}
                        style={{borderWidth: 0,backgroundColor: '#d4d4d4', width: 300, alignSelf: 'center'}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', zIndex: 1}}
                        onChangeItem={item => setBloodG(item.value)}
                    />  
                
                <ScrollView>

                    <List style={{zIndex: 2}}>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </List>
                </ScrollView>

            <MainFooter navigate = {props.navigation}/>

        </Container>

    )
}

export default DonerPage
