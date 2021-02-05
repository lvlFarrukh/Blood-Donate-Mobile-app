const InitialState = {
    registerStatus: undefined
}

export default ( state = InitialState, action ) => {
    console.log("action==>", action.payload)
    switch (action.type) {
        case 'SETREGISTERSTATUS':
            return ({
                ...state,
                registerStatus: action.payload
            })

        case 'SETSTATUS':
            return ({
                ...state,
                registerStatus: undefined
            })
    
            SETSTATUS
        default:
            break;
    }

    return state;
}