import { combineReducers } from 'redux';
import SettingReducer from './settingReducer';


const appReducer = combineReducers({
    SettingReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;