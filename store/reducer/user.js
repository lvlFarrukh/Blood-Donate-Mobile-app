const InitialState = {
    name: 'Farrukh',
    pass: 'abc123'
}

export default ( state = InitialState, action ) => {
    console.log("action==>", action.payload)
    switch (action.type) {
        case 'INITIALIZEPRODUCT':
            return ({
                // ...state,
                // allProduct: action.payload.adds,
                // sliderAdds: action.payload.sliders,
                // allSliderAdds: action.payload.sliderAdds,
                // sliderAddsLength: action.payload.sliderAddsL,
            })

        default:
            break;
    }

    return state;
}