const TEXT_INPUT_DATA = 'TEXT_INPUT_DATA';

export const SetTextInputData = param => {
    console.log("params------action screen",param)
    return {
        type: TEXT_INPUT_DATA,
        payload: param
    }
}