
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
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Setting from '../Screens/Setting'
import Details from '../Screens/Details'
import Data from '../Screens/Data'

const Tabs = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
);

const DataStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DetailStack = createStackNavigator();


const DataStackScreen = () => (
    <DataStack.Navigator>
        <DataStack.Screen name="Data" component={Data} />
    </DataStack.Navigator>
);

const DetailsStackScreen = () => (
    <DetailStack.Navigator>
        <DetailStack.Screen name="Details" component={Details} />
    </DetailStack.Navigator>
);

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Details" component={DetailsStackScreen} />
        <Tabs.Screen name="Data" component={DataStackScreen} />
        <Tabs.Screen name="Setting" component={Setting} />
        <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
);

const Navigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsScreen} />
            <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        </Drawer.Navigator>
    );
}
    ;

// export default () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={TabsScreen} />
//         <Drawer.Screen name="Profile" component={ProfileStackScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

export default Navigation;




// import {NavigationContainer} from '@react-navigation/native';
// import RootNavigation from './src/navigation/RootNavigation';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <RootNavigation/>
//     </NavigationContainer>
//   );
// }