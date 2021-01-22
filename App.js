import 'react-native-gesture-handler';
import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createSwitchNavigator} from '@react-navigation/compat'
import {createAppContainer } from '@react-navigation/native'
import SignInscreen from './src/screen/SignInscreen'
import SignUpscreen from './src/screen/SignUpscreen'
import AccountScreen from './src/screen/Accountscreen'
import TrackListscreen from './src/screen/TrackLIstscreen'
import TrackDetailsscreen from './src/screen/TrackDetailsscreen'
import TrackCreatescreen from './src/screen/TrackCreatescreen'
import {Provider as AuthProvider} from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'


const Tab = createBottomTabNavigator()
function  Bottomtab(){
  return (
    
    <Tab.Navigator>
      <Tab.Screen name = "TrackList" component = {TrackListscreen}/>
      <Tab.Screen name = "TrackDetail" component = {TrackDetailsscreen}/>
      <Tab.Screen name = "TrackCreate"  component = {TrackCreatescreen}/>
      <Tab.Screen name = "Account"  component = {AccountScreen}/>
    </Tab.Navigator>
  )
}

 const Stack = createStackNavigator() ;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>     
      <Stack.Screen name = "Signup" component={SignUpscreen}/>
      <Stack.Screen name = "Signin" component={SignInscreen}/>
      <Stack.Screen name="Bottomtab" component={Bottomtab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App

export default () =>{
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }}/>
    </AuthProvider>
  )
} 
