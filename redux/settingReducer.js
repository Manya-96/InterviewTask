const TEXT_INPUT_DATA = 'TEXT_INPUT_DATA';

const initialState = {
    textData: []
}

const SettingReducer = (state = initialState, action) => {
    console.log("action----",action);
    switch (action.type) {
        case TEXT_INPUT_DATA:
            return Object.assign({}, state, {
                textData: action.payload
            })

            default:
                return state
    }
}

export default SettingReducer