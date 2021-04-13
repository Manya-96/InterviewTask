
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
            inputValue: ' ',
            allValues:[]
        }
    }

    onChangeTextBtn = (text) => {
        // let variableName ;
        // variableName += text
        // console.log("variableName",variableName)
        this.setState({
            inputValue: text
        }, () => {
        })
    }

    doneBtn = () => {
        // if (!this.state.inputValue) {
        //     Alert.alert(
        //         "Alert Title",
        //         "Enter String",
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
           // this.state.allValues.push(this.state.inputValue);
            var joined = this.state.allValues.concat(this.state.inputValue);
             this.setState({ allValues: joined })
            console.log(" btn called=--- checking-",this.state.allValues);
        this.props.dispatch(SetTextInputData(this.state.allValues));
               //      this.setState({ allValues: joined })
               console.log("--hello--", this.props.data)



        //}
    }

    renderItem = ({ item }) => {
        console.log("item on contacts render>>>>>", item);
        return (
            <View>
                <Text>
                    {item}
                </Text>
            </View>
        )
        }


    render() {
        console.log("----", this.props.data)

        return (
            <View style={styles.center}>
                {this.props.data ? 
                <FlatList
                data={this.state.allValues}
                renderItem={this.renderItem}
                /> : <View/>}

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



