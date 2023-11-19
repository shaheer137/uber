import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from "../screens/Dashboard";
import Destination from "../screens/Destinatio";
import Pickup from "../screens/Pickup";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
      </NavigationContainer>
    );
  }

function DashboardStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Pickup" component={Pickup} />
          <Stack.Screen name="Destination" component={Destination} />
        </Stack.Navigator>
    );
  }
  


