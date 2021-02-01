import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, } from 'react-native'
import { connect } from 'react-redux';

import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';

// import components
import AppHeader from '../component/AppHeader'


// import redux actions
import {Loginfun} from '../../store/action/index'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = (props) => {
    const [bloodG, setBloodG] = useState(undefined)
    const [bloodP, setBloodP] = useState(undefined)
    const [diebetes, setDiebetes] = useState(undefined)

    return (
        <Content>

        <View style={styles.container}>
                
                <AppHeader />   

            <View style={styles.loginFields}>
                        <Form>
                            <View style={{margin: 0}}>
                                <Text style={{alignSelf: 'center',fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>Personal Information</Text>
                            </View>

                            <Item floatingLabel
                                style={{width: 290,alignSelf: 'center'}}
                            >
                                <Label>Full Name</Label>
                                <Input autoCompleteType={'off'}/>
                            </Item>

                            <Item floatingLabel
                                style={{width: 290,alignSelf: 'center'}}
                            >
                                <Label>Email</Label>
                                <Input 
                                    autoCompleteType={'email'}
                                    keyboardType={'email-address'}
                                />
                            </Item>

                            <Item floatingLabel 
                                style={{width: 290,alignSelf: 'center'}}
                            >
                                <Label>Password</Label>
                                <Input secureTextEntry={true}/>
                            </Item>

                            <Item floatingLabel
                                style={{width: 290, alignSelf: 'center'}}
                            >
                                <Label>Comform Password</Label>
                                <Input secureTextEntry={true}/>
                            </Item>

                            <Item floatingLabel
                                style={{width: 290, alignSelf: 'center'}}
                            >
                                <Label>City</Label>
                                <Input autoCompleteType={'off'}/>
                            </Item>

                            <Item floatingLabel
                                style={{width: 290, alignSelf: 'center'}}
                            >
                                <Label>Town</Label>
                                <Input autoCompleteType={'off'}/>
                            </Item>

                            <Item floatingLabel
                                style={{width: 290, alignSelf: 'center'}}
                            >
                                <Label>Phone Number</Label>
                                <Input keyboardType={'number-pad'}/>
                            </Item>

                            <View style={{margin: 20}}>
                                <Text style={{alignSelf: 'center',fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>Medical Information</Text>
                            </View>

                            <Text style={{fontWeight: 'bold',marginLeft: 20}}>Blood Group</Text>
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
                                style={{borderWidth: 0,backgroundColor: 'white', width: 300, alignSelf: 'center'}}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', }}
                                onChangeItem={item => setBloodG(item.value)}
                            />   

                            <Text style={{fontWeight: 'bold',marginLeft: 20}}>Blood Pressure</Text>
                            <DropDownPicker
                                placeholder={'Select'}
                                items={[
                                    {label: 'Yes', value: 'Yes'},
                                    {label: 'No', value: 'No'},
                                    
                                ]}
                                defaultValue={bloodP}
                                containerStyle={{height: 50, marginTop: 5, marginBottom: 20}}
                                style={{borderWidth: 0,backgroundColor: 'white', width: 300, alignSelf: 'center'}}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', }}
                                onChangeItem={item => setBloodP(item.value)}
                            />   

                            <Text style={{fontWeight: 'bold',marginLeft: 20}}>Diabetes</Text>
                            <DropDownPicker
                                placeholder={'Select'}
                                items={[
                                    {label: 'Yes', value: 'Yes'},
                                    {label: 'No', value: 'No'},
                                    
                                ]}
                                defaultValue={bloodP}
                                containerStyle={{height: 50, marginTop: 5}}
                                style={{borderWidth: 0,backgroundColor: 'white', width: 300, alignSelf: 'center'}}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', }}
                                onChangeItem={item => setBloodP(item.value)}
                            /> 

                            <Item floatingLabel
                                style={{width: 290, alignSelf: 'center'}}
                            >
                                <Label>Any other Disease</Label>
                                <Input />
                            </Item>

                            <TouchableOpacity 
                                onPress={()=> {
                                    props.navigation.navigate('Home')
                                }}
                                style={styles.l_btn}>
                                    <Text style={{marginTop: 2,alignSelf: 'center', fontWeight: 'bold',fontSize: 20, color: 'white'}}>
                                        Register
                                    </Text>
                            </TouchableOpacity>
                        </Form>
                </View>
            </View>
        </Content>

    )
}

const mapStateToProps = (state) => ({ 
    user: state.user
})
    
const mapDispatchToProps = (dispatch)=> ({
    Loginfun: ()=> { dispatch(Loginfun()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    loginFields: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        // height: 290,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 1,
    },
    l_btn: {
        alignSelf: 'center',
        margin: 50,
        backgroundColor: '#4b4948',
        width: 120,
        height: 35,
        borderRadius: 20,
    }
})