import React from 'react'
import { View, Image, StyleSheet } from "react-native";

const AppHeader = () => {
    return (
        <View style={styles.topStartup}>
            <Image 
                source={require('../../media/db_logo.png')}
                style={styles.topImg}     
            />
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    topStartup: {
        height: 150,
        marginBottom: 10
    },
    topImg: {
        height: 130,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 15,
    },
})