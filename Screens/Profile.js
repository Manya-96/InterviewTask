
import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {Button} from 'react-native-elements';



export default Profile = ({navigation}) => {
    console.log("navigation Profile-on profile--",navigation);
    return (
        <View style={styles.center}>
        <Text>This is the profile screen</Text>
        <Button
          title="Go to Profile Screen"
        //   onPress={() => navigation.navigate("About")}  
        />
      </View>
    )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });


