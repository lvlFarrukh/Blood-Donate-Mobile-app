import database from '@react-native-firebase/database';

const authenticate = (data)=> {
    let status = undefined
    let user = []
    let regUser = []
    let email = data[0]['email']

    return (dispatch)=> {
        database().ref('users').once('value', async data=> {
            await user.push(data.val())
            Object.keys(user[0]).forEach(function(key) {
                regUser.push(key)
            });
    
            regUser.find(element => element === email) === undefined ? status = 0 : status = 1

            dispatch({type: "SETREGISTERSTATUS", payload: status})
        })        
    }
}

const register = (data)=> {
    console.log(data[0]['email'])
    return (dispatch)=> {
        database().ref(`/users/${data[0]['email']}`).set(data[0])
           

        dispatch({type: "SETSTATUS", payload: undefined})
    }
}

export {
    authenticate,
    register    
}