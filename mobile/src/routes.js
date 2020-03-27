import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const appStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Details';


export default function Routes() {
  return (
    <NavigationContainer>
      <appStack.Navigator screenOptions={{headerShown:false}} initialRouteName="incidents" >
        <appStack.Screen name="incidents" component={Incidents}/>
        <appStack.Screen name="detail" component={Detail}/>
      </appStack.Navigator>
    </NavigationContainer>
  )
}