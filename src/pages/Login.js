import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { connect } from 'react-redux';

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

// import components
import AppHeader from '../component/AppHeader'

// import redux actions
import {Loginfun} from '../../store/action/index'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = (props) => {
    props.Loginfun()
    return (
       <View style={styles.container}>
            
            <AppHeader />   

           <View style={styles.loginFields}>
                {/* <Content> */}
                    <Form>
                        <Item floatingLabel
                            style={{width: 290}}
                        >
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel
                            style={{width: 290}}
                        >
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        <TouchableOpacity style={styles.l_btn}>
                            <Text style={{marginTop: 2,alignSelf: 'center', fontWeight: 'bold',fontSize: 20, color: 'white'}}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </Form>
                {/* </Content> */}

                <Text style={{fontSize: 16,alignSelf: 'center'}}>
                    If you are new, <Text 
                        style={{fontWeight: 'bold', color: 'darkred'}}
                        onPress={()=>{props.navigation.navigate('Register')}}
                    >Register</Text> Here!
                </Text>
           </View>
       </View>
    )
}

const mapStateToProps = (state) => ({ 
    user: state.user
})
    
const mapDispatchToProps = (dispatch)=> ({
    Loginfun: ()=> { dispatch(Loginfun()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    loginFields: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        height: 290,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 1,
    //     },
    //         shadowOpacity: 0.22,
    //         shadowRadius: 2.22,
    //         elevation: 0,
    },
    l_btn: {
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: '#4b4948',
        width: 120,
        height: 35,
        borderRadius: 20,
    }
})