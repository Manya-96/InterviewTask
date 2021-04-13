
import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput, Alert,FlatList
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { SetTextInputData } from '../redux/action';

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ' '
        }
    }

    onChangeTextBtn = (text) => {
        console.log("texttttttttt-----", text)
        this.setState({
            inputValue: text
        }, () => {
            // console.log("state value input-----", this.state.inputValue);
        })
    }

    doneBtn = () => {
        console.log("state value input-----", this.state.inputValue);
        // if (!this.state.inputValue) {
        //     Alert.alert(
        //         "Alert Title",
        //         "Enter value",
        //         [
        //             {
        //                 text: "Cancel",
        //                 onPress: () => console.log("Cancel Pressed"),
        //                 style: "cancel"
        //             },
        //             { text: "OK", onPress: () => console.log("OK Pressed") }
        //         ]
        //     );
        // } else {
        console.log("dont btn called=----");
        this.props.dispatch(SetTextInputData(this.state.inputValue));
        // }
    }


    render() {
        console.log("render value ropsss text input----", this.props.data)
        return (
            <View style={styles.center}>
                <Text>This is the setting screen</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter String"
                    onChangeText={text => this.onChangeTextBtn(text)}
                    keyboardType="ascii-capable"
                />
                <View style={{ marginTop: 10 }}>
                    <Button
                        title="DONE"
                        onPress={() => this.doneBtn()}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log("state-----",state);
    return{
        data : state.SettingReducer.textData
    }
};

export default connect(mapStateToProps)(Setting);

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
    }
});



