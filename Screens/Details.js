
import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';
import { Button } from 'react-native-elements';


// export default Details = ( ) => {
export default class Details extends React.Component {
    render() {
        console.log("details screenn")
        return (
            <View>
                <Text>This is the details screen</Text>
            </View>
        )
    }
}

